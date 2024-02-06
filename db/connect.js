const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://yana:yana1234@nodeexpressprojects.kus0k6s.mongodb.net/TASK-MASTER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.log(err));
