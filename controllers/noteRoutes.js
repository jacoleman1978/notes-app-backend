// Dependencies
import { Router } from "express";
import NoteController from './noteControllers.js';

// Express Router
const noteRouter = Router();

// Route for creating a new topic
noteRouter.route('/:userName/:topicId/new')
    .post(NoteController.NewTopic)

// Route to retrieve all user info
noteRouter.route('/:userName').get(NoteController.GetHomeDirectory);

// Route for a specific topic directory
noteRouter.route('/:userName/:topicId')
    .get(NoteController.GetTopics)
    .put(NoteController.EditTopic)
    .delete(NoteController.DeleteTopic)

// Route for creating a new note
noteRouter.route('/:userName/:topicId/new')
    .post(NoteController.NewNote)

// Route for a specific note
noteRouter.route('/:userName/:topicId/:noteId')
    .get(NoteController.GetNote)
    .put(NoteController.EditNote)
    .delete(NoteController.DeleteNote)

export default noteRouter;