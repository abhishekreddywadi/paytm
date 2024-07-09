const accountModel = require("../models/bank.model");
const mongoose = require("mongoose");
// const { ObjectId } = require("mongoose");

const balance = async (req, res) => {
  try {
    const userId = req.user.id;
    var newUserId = new mongoose.Types.ObjectId(userId);
    console.log(newUserId);
    if (!newUserId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    console.log(newUserId);
    const account = await accountModel.findOne({ userId: newUserId });
    if (!account) {
      return res.status(400).json({
        error: "Account not found",
      });
    }
    res.status(200).json({ balance: account.amount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const transfer = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { amount, to } = req.body;
    if (amount <= 0) {
      return res.status(400).json({
        error: "Invalid amount. Amount must be positive.",
      });
    }
    if (amount > req.user.amount) {
      return res.status(400).json({
        error: "Insufficient funds",
      });
    }
    const senderAccount = await accountModel.findOneAndUpdate(
      { userId: req.user.id },
      { $inc: { amount: -amount } },
      { session }
    );
    if (!senderAccount) {
      throw new Error("Sender account not found");
    }
    const receiverAccount = await accountModel.findOneAndUpdate(
      { userId: to },
      { $inc: { amount: amount } },
      { session }
    );
    if (!receiverAccount) {
      throw new Error("Receiver account not found");
    }
    await session.commitTransaction();
    res.status(200).json({ message: "Transfer successful" });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({ error: error.message });
  }
};
module.exports = { balance, transfer };
