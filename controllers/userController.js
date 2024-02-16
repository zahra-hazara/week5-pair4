const User = require('../models/user'); // Adjust the path as necessary
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10; // Define the salt rounds for bcrypt

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = new User({ username, hashedPassword });
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  res.status(200).json({ message: "Authentication successful" });
};

exports.getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json(allUsers);
};


exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  if (deletedUser) {
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
