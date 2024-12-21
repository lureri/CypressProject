describe('Login page', () => {
  it('Login', () => {
    cy.login('Admin','admin123')
    cy.get('[class=orangehrm-upgrade-link]').should('be.visible');
    

  })


it('Login failure', () => {
  cy.visit('/')
  cy.get('[name=username]').type('admin2');
  cy.get('[name=password]').type('admin123');
  cy.get('[type=submit]').should('be.enabled');
  cy.get('[type=submit]').click();
  cy.contains('Invalid credentials').should('not.be.enabled');
})
})