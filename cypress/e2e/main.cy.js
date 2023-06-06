describe('connected user', () => {
  it('verifies if the logout action works fine and locked pages are actually locked', () => {
    cy.visit('http://localhost:5173/main/')
    cy.get('#logout').click()
    cy.url().should('include', '/login')
    cy.visit('http://localhost:5173/user/1')
    cy.get('#403').should('be.visible')
  }),

  it('verifies that I can see other users when connected', () => {
    cy.visit('http://localhost:5173/main/')
    cy.get('.users').array.forEach(user => {
      user.find('.firstname').should('be.visible')
      user.find('.lastname').should('be.visible')
      user.find('.details').should('be.visible')
    });
  }),

  it('verifies that I can see users information pages', () => {
    cy.visit('http://localhost:5173/main/')
    cy.get('.users').eq(1).find('.details').click()
    cy.get('body').find('#email').should('be.visible')
    cy.get('body').find('#firstname').should('be.visible')
    cy.get('body').find('#lastname').should('be.visible')
    cy.get('body').find('#avatar').should('be.visible')
  })
})