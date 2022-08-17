/// <reference types="cypress" />

describe("Main weather app functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have the proper title", () => {
    cy.get("header h1").should("have.text", "Super weather YEAH! ⛅🌪️🌩️");
  });

  it("should be able to show a button when we search for a valid city", () => {
    // ...
    cy.get("form input").type("Montréal");
    cy.get("form button").click();

    cy.get("ul li button").should("have.text", "Montréal");
  });
  it("should be able to not show a button when we search for an invalid city", () => {
    // ...
    cy.get("form input").type("pouetpouet");
    cy.get("form button").click();

    cy.get("ul li button").should("not.exist");
  });
  it("should not add a second button if searching for an existing city", () => {
    cy.get("form input").type("Montréal");
    cy.get("form button").click();

    cy.get("ul li button").should("have.text", "Montréal");

    cy.get("form input").type("Montréal{enter}");

    cy.get("ul li button").should("have.length", 1);
  });
  it("should not show the currentWeather section if there is no city searched", () => {
    // ...
    cy.get("header h1").should("exist");
    cy.get(".CurrentWeather").should("not.exist");
  });
  it("should show the currentWeather section if there is a valid city searched", () => {
    // ...
    cy.get("header h1").should("exist");
    cy.get(".CurrentWeather").should("not.exist");

    cy.get("form input").type("Ottawa");
    cy.get("form button").click();

    cy.get(".CurrentWeather").should("exist");
  });
});
