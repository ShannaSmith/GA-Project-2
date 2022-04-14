const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  workTodo: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true
  } 
});

module.exports = mongoose.model("Service", serviceSchema);
