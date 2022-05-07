import pkg from 'mongoose';
const { Schema, model } = pkg;

const TopicSchema = new Schema({
    topicName: {type: String, required: true},
    userName: {type: String, required: true},
    topicChildrenIds: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    noteChildrenIds: [{type: Schema.Types.ObjectId, ref: 'Note'}]
}, {collection: 'topics'});

export default model('Topic', TopicSchema);