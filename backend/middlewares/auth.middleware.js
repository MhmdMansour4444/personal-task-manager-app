const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send("Unauthenticated");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: decoded._id });
    if (decoded) {
      req.user = user;
      next();
    }
  } catch (e) {
    console.log("Internal Server Error: ", e);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = authMiddleware;