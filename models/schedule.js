const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheduleSchema = new Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId
    },
    service:{
        Type: String,
        enum:['oil/ filter change', 'tire rotation', 'air filter change', 'check brake fluid', "check coolant", "check windshield washer fluid", "check transmission fluids", "tune-up", "emissions test" ]
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