const express = require("express");
const userRoute = express.Router();
const {
  signup,
  signin,
  userUpdate,
  userBulkData,
} = require("../controllers/user.controllers");
const validator = require("../middleware/user.auth");

// creating user routes

userRoute.post("/signup", signup);
userRoute.post("/signin", signin);
userRoute.post("/update", validator, userUpdate);
userRoute.get("/bulk", validator, userBulkData);
module.exports = userRoute;
