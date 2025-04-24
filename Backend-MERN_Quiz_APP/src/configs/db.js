
// const mongoose = require('mongoose')
// require("dotenv").config()
// module.exports = () => {
//  mongoose.connect(
//     process.env.DATABASE
//   )
// }


// connectDB.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ Connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
