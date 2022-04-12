const mongoose = require('mongoose');
//shortcut to mongoose Schema class
const Schema = mongoose.Schema;
// Create your User Model
const ownerSchema = new Schema({
    name: {
        type: String
    },
    email:{
        type: String
    },
    googleId:{
        type: String
    },
    vehicleNickname:{
        type: String
    }

}
);

  



module.exports = mongoosemodel('Owner', ownerSchema);