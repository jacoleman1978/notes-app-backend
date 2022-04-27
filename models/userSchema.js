import pkg from 'mongoose';
const { Schema, model } = pkg;

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
}, {collection: 'users'});

export default model('User', UserSchema);