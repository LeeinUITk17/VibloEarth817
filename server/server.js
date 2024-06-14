var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
const bodyParser=require('body-parser');
const session = require("express-session");
// const passport=require('./src/helper/passport');
const { connect } = require("./src/config/db");

var app = express();

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
  secret: "cnttvietnhatk17",
  resave: false,
  saveUninitialized: true,
}));


// app.use(passport.initialize());
// app.use(passport.session());


// app.use("/", require("./src/routes"));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;