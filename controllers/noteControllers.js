import mongoose from 'mongoose';
import Note from '../models/noteSchema.js';
import Topic from '../models/topicSchema.js';

class NoteController {
    // Create a new topic 
    static async NewTopic(req, res) {
        try {
            const parentTopicId = req.params.topicId;
            const topicName = req.body.topicName;

            // If the new topicName is not 'Home Directory' create it
            if (topicName !== 'Home Directory') {
                const newTopic = {
                    topicName: topicName,
                    userName: req.params.userName,
                    topicChildrenIds: [],
                    noteChildrenIds: []
                };
                
                // Create new topic
                const doc = await Topic.create(newTopic);

                // Push the new topicId into the parent topic's topicChildrenIds array
                const parentTopic = await Topic.findOne({_id: parentTopicId});
                const childTopicId = doc._id;
                parentTopic.topicChildrenIds.push(childTopicId);
    
                parentTopic.save();

                res.json(doc);
            }
            
        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }
    
    // Get all topics and notes in the 'Home Directory'
    static async GetHomeDirectory(req, res) {
        try {
            const userName = req.params.userName;
            const topicName = "Home Directory";
            
            // Use populate to substitute topicIds and noteIds for the actual documents
            const response = await Topic.findOne({userName: userName, topicName: topicName}).populate('topicChildrenIds').populate('noteChildrenIds');

            res.json(response);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Get all topics and notes in the specified topic
    static async GetTopicsAndNotes(req, res) {
        try {
            const userName = req.params.userName;
            const topicId = req.params.topicId;

            // Use populate to substitute topicIds and noteIds for the actual documents
            const response = await Topic.findOne({userName: userName, _id: topicId}).populate('topicChildrenIds').populate('noteChildrenIds');
            
            res.json(response);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Edit the topicName and return the new document
    static async EditTopic(req, res) {
        try {
            const topicId = req.params.topicId;
            const topicName = req.body.topicName;

            const response = await Topic.findOneAndUpdate({_id: topicId}, {topicName: topicName}, {new: true});

            res.json(response);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Delete a topic and return the parentTopicId
    static async DeleteTopic(req, res) {
        try {
            const topicId = req.params.topicId;

            const response = await Topic.deleteOne({_id: topicId});

            // Remove the topicId from the topicChildrenIds array of parent topic
            const parentTopic = await Topic.findOne({topicChildrenIds: mongoose.Types.ObjectId(topicId)});
            parentTopic.topicChildrenIds.pull(topicId);
            await parentTopic.save();

            // Remove the notes with this topic as the parent
            const noteChildren = await Note.find({parentTopicId: topicId});
            noteChildren.forEach(async (note) => {
                await Note.deleteOne({_id: note._id});
            })

            res.json({parentTopicId: parentTopic._id});

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Create a new note attached to a topic
    static async NewNote(req, res) {
        try {
            const parentTopicId = req.params.topicId;

            const content = req.body.content;
            const isSubnote = req.body.isSubnote;
            const parentNoteId = req.body.parentNoteId;

            let newNote = {};

            // Check if the new note is a subnote (future functionality) or not before setting data for newNote
            if (isSubnote === true) {
                newNote = {
                    userName: req.params.userName,
                    parentTopicId: parentTopicId,
                    parentNoteId: parentNoteId,
                    subnoteIds: [],
                    content: content
                }
            } else {
                newNote = {
                    userName: req.params.userName,
                    parentTopicId: parentTopicId,
                    subnoteIds: [],
                    content: content
                }
            }
            
            const doc = await Note.create(newNote);
            const childNoteId = doc._id;

            // If a subnote, add the subnote noteId to the parent Note
            if (isSubnote === true) {
                const parentNote = await Note.findOne({_id: parentNoteId});
                parentNote.subnoteIds.push(childNoteId);
                await parentNote.save();
            } else {
                // Add new noteId to the noteChildrenIds array of the parent topic
                const parentTopic = await Topic.findOne({_id: parentTopicId});
                parentTopic.noteChildrenIds.push(childNoteId);
                await parentTopic.save();
            }

            res.json(doc);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Edit the content of a note
    static async EditNote(req, res) {
        try {
            const noteId = req.params.noteId;
            const content = req.body.content;

            const response = await Note.findOneAndUpdate({_id: noteId}, {content: content}, {new: true});

            res.json(response);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Delete a note and return the parentTopicId
    static async DeleteNote(req, res) {
        try {
            const parentTopicId = req.params.topicId;
            const noteId = req.params.noteId;

            const response = await Note.deleteOne({_id: noteId});

            // Remove the noteId from the noteChildrenIds array of the parent topic
            const parentTopic = await Topic.findOne({_id: parentTopicId});
            parentTopic.noteChildrenIds.pull(noteId);
            await parentTopic.save();

            res.json({parentTopicId: parentTopic._id});

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }
}

export default NoteController;