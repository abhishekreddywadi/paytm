const jwt = require("jsonwebtoken");
require("dotenv").config();
const validator = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    if (!decoded) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = validator;
