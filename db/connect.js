const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://yana:yana1234@nodeexpressprojects.kus0k6s.mongodb.net/TASK-MASTER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
