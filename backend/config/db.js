const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
const dbconnection = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Error connecting to MongoDB:", err));
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { dbconnection };
