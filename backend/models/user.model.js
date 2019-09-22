const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: true,
        minlength: 8
    },
    userFirstName: {
        type: String,
        required: true,
        trim: true
    },
    userLastName: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User