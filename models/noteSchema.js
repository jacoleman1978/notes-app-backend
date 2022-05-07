import pkg from 'mongoose';
const { Schema, model } = pkg;

const NoteSchema = new Schema({
    userName: {type: String, required: true},
    parentTopicId: {type: Schema.Types.ObjectId, ref: 'Topic', required: true},
    parentNoteId: {type: Schema.Types.ObjectId, ref: 'Note'},
    subnoteIds: [{type: Schema.Types.ObjectId, ref: 'Note'}],
    content: {type: String, required: true}
}, {collection: 'notes'});

export default model('Note', NoteSchema)