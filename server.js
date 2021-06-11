const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express App")
})

app.listen("3000", () => {
  console.log("Listening on port 3000")
})