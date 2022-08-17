/// <reference types="cypress" />

describe("Main weather app functionality", () => {
  beforeEach(() => {
    cy.visit("https://google.com");
  });

  it("should return wormhole in the results", () => {
    cy.get(".gLFyf").type("Einstein-Rosen Bridge{enter}");

    cy.get(
      ":nth-child(1) > .MjjYud > .g > .jtfYYd > .jGGQ5e > .yuRUbf > a > .LC20lb"
    ).should("have.text", "Wormhole - Wikipedia");
  });
});
