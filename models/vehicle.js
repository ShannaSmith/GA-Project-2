const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create new module
const vehicleSchema = new Schema({
    userId:{
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
        type: Number,
        required: true,
        min:1908,
        max:2030
    },
   serviceId:{
       type:mongoose.Schema.Types.ObjectId
   },
   vehicleNickname:{
    type: String
}
});
module.exports = mongoose.model('Vehicle', vehicleSchema);