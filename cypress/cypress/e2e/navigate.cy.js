describe('site navigation', () => {
  it('opens the login page and goes to the deshboard', () => {
    cy.visit('localhost:8080/')
    cy.get('#email').type('MyName@email.com')
    cy.get('#password').type('MyPassword')
    cy.get('#login').click()
    cy.get('.user_card').should('be.visible')
    cy.get('.more_info').eq(1).click()
    cy.get('h1').should(($h1) => {
      expect($h1.eq(0), 'first item').to.contain('Bienvenue sur votre profile')
    })
    cy.get('#dashboard').click()
    cy.get('.user_card').should('be.visible')
    cy.get('#logout').click()
    cy.get('#email').should('be.visible')
  })
})