// connectDb.js

const mongoose = require("mongoose");

const connectDb = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  // Example local uri = mongodb://localhost:27017/nextjs-blog
  // where nextjs-blog is the name of the database
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;