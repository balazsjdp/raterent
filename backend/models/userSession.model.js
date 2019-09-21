const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    validUntil: {
        type: Date,
        required: true
    },
    token: {
        type: String,
        required: true,
    },
   
},
{
    timestamps: true
})

const UserSession = mongoose.model('UserSession', userSchema);

module.exports = UserSession