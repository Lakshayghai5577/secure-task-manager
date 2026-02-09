const mongoose = require("mongoose");

// Function to connect MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1); // stop app if DB fails
  }
};

module.exports = connectDB;
