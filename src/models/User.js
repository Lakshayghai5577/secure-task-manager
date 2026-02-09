const mongoose = require("mongoose");

// User schema defines how user data is stored
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true // hashed password
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
