import pkg from 'mongoose';
const { Schema, model } = pkg;

const NoteSchema = new Schema({
    userName: {type: String},
    parentTopicId: {type: Schema.Types.ObjectId, ref: 'Topic'},
    parentNoteId: {type: Schema.Types.ObjectId, ref: 'Note'},
    subnoteIds: [{type: Schema.Types.ObjectId, ref: 'Note'}],
    content: {type: String}
}, {collection: 'notes'});

export default model('Note', NoteSchema)