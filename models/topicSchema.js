import pkg from 'mongoose';
const { Schema, model } = pkg;

const TopicSchema = new Schema({
    topicName: {type: String},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    topicChildrenIds: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    noteChildrenIds: [{type: Schema.Types.ObjectId, ref: 'Note'}]
}, {collection: 'topics'});

export default model('Topic', TopicSchema);