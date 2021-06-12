const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

//middleware for sending static files like css, js and images to browser
app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  // res.send("Express App");
  const pathToHtmlFile = path.resolve(__dirname, "../dist/dashboard.html");
  const htmlFileContent = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(htmlFileContent);
});

app.listen("3000", () => {
  console.log("Listening on port 3000")
});