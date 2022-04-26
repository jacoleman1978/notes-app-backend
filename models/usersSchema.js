import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    hashedPwd: {type: String, required: true}
})

module.exports = mongoose.model('Users', userSchema)