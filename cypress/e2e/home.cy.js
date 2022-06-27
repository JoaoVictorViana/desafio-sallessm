describe('Testando a página Home', () => {
  it('Conteúdo da Dashboard', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1[data-testid="dashboard-introduction"]').should('be.visible')
  })
  it('Social Media links', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[data-testid="socialMedia-linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/in/jo%C3%A3o-victor-duarte-viana-158364131/')
  })
})