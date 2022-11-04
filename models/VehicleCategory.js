const mongoose = require("../config/db");

const VehicleCategorySchema = mongoose.Schema({
    category_name: {
      type: String,
      required: true
    }
});

const VehicleCategory = mongoose.model("VehicleCategory", VehicleCategorySchema);
module.exports = VehicleCategory;