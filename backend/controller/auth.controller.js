const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "password must be at least 6 characters!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully!!" });
  } catch (error) {
    console.log(error);
    return res.send(500).send("Internal server error!");
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
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: "3hrs"
    });
    res.status(200).json({token});

  } catch (error) {
    console.log(error);
    return res.send(500).send("Internal server error!");
  }
};

module.exports = { register, login };
