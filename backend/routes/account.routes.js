const express = require("express");
const accountRouter = express.Router();
const { balance, transfer } = require("../controllers/account.controller");
const validator = require("../middleware/user.auth");

accountRouter.get("/balance", validator, balance);
accountRouter.post("/transfer", validator, transfer);

module.exports = accountRouter;
