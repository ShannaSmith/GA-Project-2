const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId
    },
    workTodo:{
        Type: [String]
    },
    completed:{
        type:Boolean
    },
    date:{
        type: Date
    },
    vehicle:{
    type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Service', serviceSchema);