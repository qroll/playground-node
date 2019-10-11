var express = require("express");
var url = require("url");

var app = express();

const favicon = (req, res, next) => {
  res.status(200).end();
};

const middleware = (req, res, next) => {
  throw new Error("derp");
  console.log("url:", req.url);
  console.log("original:", req.originalUrl);
  console.log("base:", req.baseUrl);
  console.log("path:", req.path);
  console.log("parse->pathname:", url.parse(req.originalUrl));
  next();
};

const errorHandler = (error, req, res, next) => {
  console.log("error", error);
  res.status(200).json({});
  next();
};

const handler = (req, res) => {
  res.status(200).end();
};

app.use("/favicon.ico", favicon);

app.use("/error", middleware);

app.use(errorHandler);

// app.use("/api", handler);

app.get("*", handler);

app.listen(3000);
