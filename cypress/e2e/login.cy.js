describe('login', () => {
  it('connect the user in the form resister', () => {
    cy.visit('http://localhost:5174/login')
    cy.get('#openRegister').click()
    cy.get('#registerForm').should('be.visible')
    cy.get('#usernameRegister').type('léa')
    cy.get('#emailRegister').type('lea.portier@hotmail.fr')
    cy.get('#passwordRegister').type('LeaPortier')
    cy.get('#submitRegister').click()
    cy.get('.user').should('be.visible')
  }),

  it('connect the user in the form login', () => {
    cy.visit('http://localhost:5174/login')
    cy.get('#login').click()
    cy.get('#usernameLogin').type('léa')
    cy.get('#passwordLogin').type('LeaPortier')
    cy.get('#submitLogin').click()
    cy.get('.user').should('be.visible')
  })
})