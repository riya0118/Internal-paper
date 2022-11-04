const mongoose = require("../config/db");

const VehicleSchema = mongoose.Schema({
  vehicle_brand: {
    type: String,
    required: true
  },
  category_name: {
    type: String,
    required: true
  },
  vehicle_picture: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  depreciation: {
    type: Number,
    required: true
  },
  no_of_years: {
    type: Number,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  }
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle