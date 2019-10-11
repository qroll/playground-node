var express = require("express");
var path = require("path");

var app = express();

const one = (req, res, next) => {
  console.log("this is one");
  res.status(200).end();
  // next();
};

const two = (req, res, next) => {
  console.log("this is two");
  next();
};

const favicon = (req, res, next) => {
  res.status(200).end();
};

app.use("/hq", one);

app.use(two);

app.use("/favicon.ico", favicon);

app.listen(3000);
