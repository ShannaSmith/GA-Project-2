const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create new module
const vehicleSchema = new Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId
    },
    vin:{
        type: String
    },
    make:{
        type: String
    },
    model:{
        type: String
    },
    year:{
        type: Date
    },
   serviceSchedule:{
       type:mongoose.Schema.Types.ObjectId
   }
});
module.exports = mongoosemodel('Vehicle', vehicleSchema);