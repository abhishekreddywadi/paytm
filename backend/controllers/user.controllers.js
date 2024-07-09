const userModel = require("../models/user.model");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const accountModel = require("../models/bank.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const zod = require("zod");
const signupSchema = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
  // Add more fields as needed for user profile
});
const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});
const signup = async (req, res) => {
  try {
    // Validate input using Zod schema
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid input" });
    }
    const { username, firstName, lastName, password } = req.body;
    // console.log(usern);
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username,
      firstName,
      lastName,
      password: hashedPassword,
    });
    // add random money to the user account
    // conver user id to object id
    // const toString = new ObjectId(newUser._id).toString();
    const userAccount = await accountModel.create({
      userId: newUser._id,
      amount: 1 + Math.random() * 10000,
    });
    if (!userAccount) {
      return res.status(400).json({ message: "failed to create user account" });
    }

    const jwtToken = await jwt.sign(
      {
        id: newUser._id,
        username: newUser.username,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      },
      process.env.JWT_TOKEN
    );
    return res
      .status(201)
      .json({ message: "User created successfully", token: jwtToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
const signin = async (req, res) => {
  try {
    // Validate input using Zod schema
    // If they don't, return an unauthorized error message
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid input" });
    }
    const { username, password } = req.body;
    // Check if username and password match any existing user in the database
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    // If they do, generate a JWT token and return it as the response
    const jwtToken = await jwt.sign(
      {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.JWT_TOKEN
    );
    return res.json({
      message: "User signed in successfully",
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
const userUpdate = async (req, res) => {
  try {
    const { id } = req.user;
    const { firstName, lastName, password } = req.body;
    if (!firstName && !lastName && !password) {
      return res.status(400).json({ message: "No fields to update" });
    }
    const hashedPassword = await bcrypt.hashPassword(password, 10);
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { firstName, lastName, password: hashedPassword },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    // console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
const userBulkData = async (req, res) => {
  try {
    const filter = req.query.filter || "";
    const users = await userModel.find({
      $or: [
        { firstName: { $regex: filter } },
        { lastName: { $regex: filter } },
      ],
    });
    return res.json({
      user: users.map((user) => ({
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      })),
    });
  } catch (error) {}
};

module.exports = { signup, signin, userUpdate, userBulkData };
