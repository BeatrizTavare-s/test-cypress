describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })
  it('passes', () => {
    cy.get('input').type('beatriz');
    cy.get('h1').should('contain.text', 'beatriz');
  })
})