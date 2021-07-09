var express = require("express");
var fs = require("fs");
var https = require("https");
var app = express();

app.use("/challenge-1", express.static("challenge-1"));
app.use("/challenge-2", express.static("challenge-2"));

app.get("/", function (req, res) {
  res.send("hello world");
});

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    app
  )
  .listen(7000, function () {
    console.log("App listening on port 7000! Go to https://localhost:7000/");
  });
