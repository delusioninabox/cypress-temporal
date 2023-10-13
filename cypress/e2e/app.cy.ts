describe('template spec', () => {
  it("shows a date", () => {
    cy.visit('/');
    cy.get('[data-cy="today"]').should("exist");
  });

  it("downloads as a png", () => {
    cy.visit('/');
    cy.get('[data-cy="png-download-btn"]').click();
    cy.readFile(`cypress/downloads/today.png`).should('exist');
  });

  it("downloads as a pdf", () => {
    cy.visit('/');
    cy.get('[data-cy="pdf-download-btn"]').click();
    cy.readFile(`cypress/downloads/today.pdf`).should('exist');
  });
});