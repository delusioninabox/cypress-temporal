describe('template spec', () => {
  it("shows a date", () => {
    cy.visit('/');
    cy.get('[data-cy="today"]').should("exist");
  });
});