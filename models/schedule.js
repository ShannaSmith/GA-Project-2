const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheduleSchema = new Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId
    },
    service:{
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

module.exports = mongoose.model('Schedule', scheduleSchema);