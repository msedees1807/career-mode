const assert = require("assert");
//Describe tests

describe("Run the first set of tests", () => {
  // then create the tests inside as a second parameter
  // use it blocks for each test
  // the it block has a description and a function as the test

  it("Add 2 numbers", () => {
    assert(2 + 3 === 5);
  });
});
