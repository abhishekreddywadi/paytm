const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 30,
    trim: true,
    // custom validator for username uniqueness
    lowercase: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
