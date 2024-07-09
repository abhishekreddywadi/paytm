const express = require("express");
require("dotenv").config();
const app = express();
const { dbconnection } = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const accountRouter = require("./routes/account.routes");
const accountModel = require("./models/bank.model");
// const bodyParser = require("body-parser");

dbconnection();
app.use(cors());
app.use(express.json());
//app.use(bodyParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/account", accountRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
