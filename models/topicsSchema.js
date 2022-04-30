import pkg from 'mongoose';
const { Schema, model } = pkg;

const TopicSchema = new Schema({
    
}, {collection: 'topics'});

export default model('Topic', TopicSchema);