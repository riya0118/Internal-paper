const express = require("express");
const app = express();
require("dotenv").config();
const VehicleRoute = require("./routes/VehicleRoute");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/vehicles", VehicleRoute);
app.use(express.static("uploads"))

app.listen(8000);
console.log("App is listening on port 8000"); 