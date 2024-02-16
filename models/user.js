const mongoose = require('mongoose');

// Define a Mongoose schema for the user with only the hashed password
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  hashedPassword: { type: String, required: true }
});

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
