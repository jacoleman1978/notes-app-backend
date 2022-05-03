import pkg from 'mongoose';
const { Schema, model } = pkg;

const TopicSchema = new Schema({
    topicName: {type: String},
    userName: {type: String},
    topicChildrenIds: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    noteChildrenIds: [{type: Schema.Types.ObjectId, ref: 'Note'}]
}, {collection: 'topics'});

export default model('Topic', TopicSchema);