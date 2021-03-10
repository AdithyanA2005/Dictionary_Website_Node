const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");

var userRouter = require("./routes/user");
var adminRouter = require("./routes/admin");
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("basedir", path.join(__dirname, ""));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/", userRouter);

// TODO: Uncomment this to use /admin
// app.use("/admin", adminRouter);

app.locals.basedir = app.get("basedir");

app.use(function (req, res, next) {
  // This will send 404 errors to the handeler function below
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // This is the error handler functions
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error/404");
});

module.exports = app;
