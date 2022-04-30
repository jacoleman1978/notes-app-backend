// Dependencies
import { Router } from "express";
import NoteController from './noteControllers.js';

// Express Router
const noteRouter = Router();

// Route to retrieve all user info
noteRouter.route('/:userName').get(NoteController.GetHomeDirectory);

// Route for a specific topic directory
noteRouter.route('/:userName/:topicId')
    .get(NoteController.GetTopicDirectory)
    .put(NoteController.EditTopicDirectory)
    .delete(NoteController.DeleteTopicDirectory)

// Route for creating a new note
noteRouter.route('/:userName/:topicId/new')
    .post(NoteController.NewNote)

// Route for a specific note
noteRouter.route('/:userName/:topicId/:noteId')
    .get(NoteController.GetNote)
    .put(NoteController.EditNote)
    .delete(NoteController.DeleteNote)

export default noteRouter;