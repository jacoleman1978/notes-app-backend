import Note from '../models/noteSchema.js';
import Topic from '../models/topicSchema.js';

class NoteController {
    // TODO: need static methods
    static async NewTopic(req, res) {
        try {
            const parentTopicId = req.params.topicId;

            const topicName = req.body.topicName;

            if (topicName !== 'Home') {
                const newTopic = {
                    topicName: topicName,
                    userName: req.params.userName,
                    topicChildrenIds: [],
                    noteChildrenIds: []
                }
                
                const doc = await Topic.create(newTopic);

                const parentTopic = await Topic.findOne({_id: parentTopicId});

                const childTopicId = doc._id;
                parentTopic.topicChildrenIds.push(childTopicId);
    
                await parentTopic.save();

                res.json(doc);
            }
            

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }
    
    static async GetHomeDirectory(req, res) {
        try {
            const userName = req.params.userName;
            const topicName = "Home";
            
            const response = await Topic.findOne({userName: userName, topicName: topicName}).select('topicChildrenIds').populate('topicChildrenIds');

            res.json(response.topicChildrenIds);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    static async GetTopics(req, res) {
        try {
            const userName = req.params.userName;
            const topicId = req.params.topicId;

            const response = await Topic.findOne({userName: userName, _id: topicId}).select('topicChildrenIds').populate('topicChildrenIds');
            
            res.json(response.topicChildrenIds);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

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

    static async DeleteTopic(req, res) {
        try {
            const topicId = req.params.topicId;

            const response = await Topic.deleteOne({_id: topicId});

            res.json(response);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    static async GetNote(req, res) {

    }

    static async EditNote(req, res) {

    }

    static async DeleteNote(req, res) {

    }

    static async NewNote(req, res) {

    }
}

export default NoteController;