// Require mongoose so that it can be used
// add a schema using mongoose
const mongoose = require("mongoose");

// then create a schema
// give each team a set of data that it should have, name, star rating, prestige
const teamSchema = mongoose.Schema({
  name: {
   type: String,
   required: [true, 'Name required']
  },
  age: Number,
});

// then create a model using the schema
// tell it which collection to place the model in, and using which schema
// Collection: teams, which is found in the mongo db
const team = mongoose.model("teams", teamSchema);

// finally export the model, to allow usage in other files
module.exports = team;
