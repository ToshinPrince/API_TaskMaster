const express = require("express");
const app = express();

const port = "3000";

app.get("/hello", (req, res) => {
  res.send("TaskMaster App");
});

app.listen(port, console.log(`App is listeniong on ${port}`));
