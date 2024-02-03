const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const port = "3000";

app.get("/hello", (req, res) => {
  res.send("TaskMaster App");
});

app.use("/api/v1/tasks", tasks);

// //app.get("/api/v1/tasks") - Get all the task
// app.get("/api/v1/tasks", (req, res) => {
//   res.send("All Tasks");
// });
// //app.post("/api/v1/tasks") - Create a new task
// app.post("/api/v1/tasks", (req, res) => {
//   console.log("Create Route");
// });
// //app.get("/api/v1/tasks/:id") - Get a single task
// app.get("/api/v1/tasks/:id", (req, res) => {
//   console.log("Get Single Task");
// });
// //app.patch("/api/v1/tasks/:id") - update a task
// app.patch("/api/v1/tasks/:id", (req, res) => {
//   console.log("Update a task");
// });
// //app.delete("/api/v1/tasks/:id") - Delete task
// app.delete("/api/v1/tasks", (req, res) => {
//   console.log("Delete Task");
// });
app.listen(port, console.log(`App is listeniong on ${port}`));
