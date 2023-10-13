describe("It shows a date", () => {
  cy.get('[data-cy="today"]').should("exist");
});
