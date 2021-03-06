const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
var favicon = require("serve-favicon");

const items = require("./routes/api/items");
const words = require("./routes/api/words");
const endpoints = require("./routes/api/endpoints");

const app = express();
app.use(favicon(path.join(__dirname, "./favicon.png")));

// fix CORS issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("Successfully Connected to MongoDB"))
  .catch(err => console.log(err));

// Use Routes
app.use("/words", items);
app.use("/allwords", words);
app.use("/", endpoints); //this route must be at the end

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server running on port ${port}`));
