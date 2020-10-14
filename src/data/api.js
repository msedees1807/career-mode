const express = require("express");
const router = express.Router();
const Team = require("./models/teams");

// GET a list of teams from the db @ /api/teams passing in the request and response
// Send back the type of request
router.get("/teams", (req, res, next) => {
  res.send({ type: "GET" }).catch(next);
});

// Add a new team
// create and save a team using the Team schema, imported from teams.js, adding the request body
router.post("/teams", (req, res, next) => {
  Team.create(req.body)
    .then((createdTeam) => {
      res.send(createdTeam);
    })
    .catch(next);
});

// Update a team using the team id in the location
router.put("/teams/:id", (req, res, next) => {
  Team.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Team.findOne({ _id: req.params.id }).then((response) => {
        res.send(response);
      });
    })
    .catch(next);
});

// Delete a team using a team id
router.delete("/teams/:id", (req, res, next) => {
  Team.findByIdAndRemove({ _id: req.params.id })
    .then((response) => {
      res.send(response);
    })
    .catch(next);
});

module.exports = router;
