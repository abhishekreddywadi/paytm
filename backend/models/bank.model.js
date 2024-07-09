const mongoose = require("mongoose");
const userModel = require("../models/user.model");
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
});

const accountModel = mongoose.model("Bank", accountSchema);

module.exports = accountModel;
