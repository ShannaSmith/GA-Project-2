const mongoose = require('mongoose');
//shortcut to mongoose Schema class
const Schema = mongoose.Schema;
// Create your User Model
const userSchema = new Schema({
    name: {
        type: String
    },
    email:{
        type: String,
        avatar: String
    },
    googleId:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);