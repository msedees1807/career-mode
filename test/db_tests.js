const assert = require("assert");
const team = require("../src/data/models/teams");

describe("test the DB", () => {
  it("Checks that we have saved a team to the DB", () => {
    let newTeam = new team({
      name: "Manchester United",
      rating: 4,
    });

    newTeam.save().then((done) => {
      assert(newTeam.isNew === false);
      done();
    });
  });
});
