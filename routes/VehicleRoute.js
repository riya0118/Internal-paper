const router = require("express").Router();
const VehicleCategory = require("../models/VehicleCategory");
const Vehicle = require("../models/Vehicle");
const multer = require("multer");

router.get("/list", (req, res) => {
  Vehicle.find((err, vehicles) => {
    if(err) res.status(500).send(err);
    res.render("list", { vehicles: vehicles })
  })
})

router.get("/add", (req, res) => {
  VehicleCategory.find((err, vcategories) => {
    if(err) console.log(err);
    res.render("add", { vcategories: vcategories })
  })
})

var options = multer.diskStorage({
  destination : function (req, file, cb) {
      cb(null, './uploads');
    } ,
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
      }
})

var upload = multer({ storage: options });

router.post("/save", upload.single('image'), (req, res) => {
  let price = req.body.price;
  let depreciation = req.body.depreciation;
  let years = req.body.noofyears;
  totalprice = price * Math.pow((1 - depreciation / 100), years);
  
  const addVehicle = new Vehicle({
    vehicle_brand: req.body.vbrand,
    category_name: req.body.category_name,
    vehicle_picture: req.file.filename,
    price: price,
    depreciation: depreciation,
    no_of_years: years,
    total_price: totalprice
  });
  addVehicle.save((err, vehicle) => {
    if(err) res.status(500).send(err);
    // console.log(vehicle._id + " inserted successfully to vehicle collection!!!");
    res.redirect("/vehicles/list");
  })
})

module.exports = router;