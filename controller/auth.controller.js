const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password are required",
      });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "password must be at least 6 characters!" });
    }
    if (typeof password !== "string") {
      return res.status(400).json({ error: "password must be a string " });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully!!" });
  } catch (error) {
    res.status(500).json({ error: `Registration failed: ${error.message}` });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentication Failed!" });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(401).json({ error: "Authentication Failed!" });
    }
    const token = jwt.sign({userId: user._id}, proccess.env.JWT_SECRET_KEY,{
        expiresIn: "3hrs"
    });
    res.status(200).json({token});

  } catch (error) {
    res.status(500).json({error: "login failed!"});
  }
};

module.exports = { register, login };
