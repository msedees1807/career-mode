const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Set up express app (this packages up POST, GET, PUT, DELETE)
const app = express();

//Connect to mongoose
mongoose.connect("mongodb://localhost/career-mode-db");
//ES6 Promises, mongoose promise overridden with the global promise
mongoose.Promise = global.Promise;

// Open conneciton to mongo once, fire a console.log saying "conneciton made"
// Then log errors on every ocaission
mongoose.connection
  .once("open", () => console.log("Connection made yay!"))
  .on("error", (error) => console.log("Warning, error:", error));

// Body parser used first, so place above routes
// Parses different types of body data, eg json
app.use(bodyParser.json());

// Initialise routes: Use middleware, this runs between the req and res
app.use(require("./api"));

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

// Listen on port 4000
app.listen(process.env.port || 4000, function () {
  console.log("Express is now listening for requests :)");
});
