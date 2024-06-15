describe("other pages test cases", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1200, 880);
  });

    it("searching for user (example: anna)", () => {
      cy.get('[data-cy="search-input"]').type("anna");
      cy.get('[data-cy="search-button"]').click();

      cy.get('[data-cy="result-user-accordion"]')
        .should("be.visible")
        .should("have.length", 5);
    });

    it("earching for user by clicking enter", () => {
      cy.get('[data-cy="search-input"]').type("anna");
      cy.get('[data-cy="search-input"]').type("{enter}");

      cy.get('[data-cy="result-user-accordion"]')
        .should("be.visible")
        .should("have.length", 5);
    });

    it("searching for user 01NikodemW (me)", () => {
      cy.get('[data-cy="search-input"]').type("01NikodemW");
      cy.get('[data-cy="search-button"]').click();

      cy.get('[data-cy="result-user-accordion"]')
        .should("be.visible")
        .should("have.length", 1);
    });

    it("searching for not existing user (example: NoExistingUser000000)", () => {
      cy.get('[data-cy="search-input"]').type("NoExistingUser000000");
      cy.get('[data-cy="search-button"]').click();

      cy.get('[data-cy="no-user-found"]').should("be.visible");
      cy.get('[data-cy="result-user-accordion"]').should("not.exist");
    });

    it("searching phrase that only has one user", () => {
      cy.get('[data-cy="search-input"]').type("01NikodemW");
      cy.get('[data-cy="search-button"]').click();

      cy.get('[data-cy="result-user-accordion"]')
        .should("be.visible")
        .should("have.length", 1);
    });

    it("searching for user's repositories", () => {
      cy.get('[data-cy="search-input"]').type("01NikodemW");
      cy.get('[data-cy="search-button"]').click();

      cy.get('[data-cy="result-user-accordion-summary"]').click();

      cy.get('[data-cy="repository-item"]').should("be.visible");
    });

    it("clicking on search with empty input", () => {
      cy.get('[data-cy="search-button"]').click();

      cy.get('[data-cy="no-user-found"]').should("not.exist");
      cy.get('[data-cy="result-user-accordion"]').should("not.exist");
      cy.get('[data-cy="repository-item"]').should("not.exist");
    });
});
