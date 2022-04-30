import pkg from 'mongoose';
const { Schema, model } = pkg;

const NoteSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    parentTopicId: {type: Schema.Types.ObjectId, ref: 'Topic'},
    content: {type: String}
}, {collection: 'notes'});

export default model('Note', NoteSchema)