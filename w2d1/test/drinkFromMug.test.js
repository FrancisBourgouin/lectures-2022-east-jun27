const drinkFromMug = require("../drinkFromMug");
// const assert = require("assert");
const expect = require("chai").expect;

describe("Optimistic Drink Tests", () => {
  it("should return a modified mug object that reflects the size of the sip", () => {
    const mugObject = {
      startingVol: 700,
      currentVol: 500,
      content: "Tea (Not the mister)",
      name: "Mugginator",
    };
    const expectedResult = {
      startingVol: 700,
      currentVol: 450,
      content: "Tea (Not the mister)",
      name: "Mugginator",
    };

    const result = drinkFromMug(mugObject, 50);

    // assert.deepEqual(expectedResult, result);
    expect(result).to.be.an("object");
    expect(result).to.deep.equal(expectedResult);
  });
});

describe("Pessimistic Drink Tests", () => {
  it("should return a message if the currentVol was at 0", () => {
    const mugObject = {
      startingVol: 700,
      currentVol: 0,
      content: "Tea (Not the mister)",
      name: "Mugginator",
    };
    const expectedResult = "WHY ARE YOU TRYING TO DRINK FROM AN EMPTY MUG";
    const result = drinkFromMug(mugObject, 50);

    expect(result).to.be.a("string");
    expect(result).to.equal(expectedResult);
    // typeof result === string
    // assert.equal(typeof result, "string")
  });
  it("should return a modified mug object with a currentVol of 0 if sip bigger than remaining volume", () => {
    // ...
    const mugObject = {
      startingVol: 700,
      currentVol: 100,
      content: "Tea (Not the mister)",
      name: "Mugginator",
    };
    const expectedResult = {
      startingVol: 700,
      currentVol: 0,
      content: "Tea (Not the mister)",
      name: "Mugginator",
    };

    const result = drinkFromMug(mugObject, 150);

    // assert.deepEqual(expectedResult, result);
    expect(result).to.be.an("object");
    expect(result).to.deep.equal(expectedResult);
  });
  it("should return a message if the mug object is not valid", () => {
    const mugObject = {
      name: "Mugginator",
    };
    const expectedResults = ["WHAAAAAAT?", "OMG"];
    const result = drinkFromMug(mugObject, 50);

    expect(result).to.be.a("string");
    expect(expectedResults).to.include(result);
  });
  it("should return a message if the sipSize is not a valid number", () => {
    const mugObject = {
      startingVol: 700,
      currentVol: 0,
      content: "Tea (Not the mister)",
      name: "Mugginator",
    };
    const expectedResult = "HOW DO YOU SIP AT NIGHT ?!?!";
    const result = drinkFromMug(mugObject, "A VERY BIG SIP");

    expect(result).to.be.a("string");
    expect(result).to.equal(expectedResult);
  });
});
