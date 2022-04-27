import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    hashedPwd: {type: String, required: true}
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', UserSchema)