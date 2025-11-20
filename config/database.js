const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.DB_STRING;

    if (!uri) {
      throw new Error("DB_STRING is missing in .env");
    }

    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
