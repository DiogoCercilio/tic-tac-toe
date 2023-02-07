/**
 * Just some basic test cases. On a real scenario, I would test all others possible failure cases too.
 */

describe('Welcome Page', () => {
  it('Should render correct elements on the screen', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h1').should('have.text', 'Reactic-Tac-Toe 😎')
    cy.get('[href="/game"]').should('exist').and('have.text', 'Start Game').click()
  })
})

describe('Game Page', () => {
  it('Should render correct elements on the screen', () => {
    cy.visit('http://localhost:3000/game')

    cy.get('h1').should('have.text', 'Reactic-Tac-Toe')
    cy.get('h3').eq(1).should('exist').and('have.text', '"X" plays now...')
    cy.get('[data-cy="board-game"]').should('exist')
    cy.get('[data-type]').should('have.length', 9)
    cy.get('[data-type]').eq(0).click().should('have.text', 'X')
    cy.get('[data-type]').eq(3).click().should('have.text', 'O')
    cy.get('[data-type]').eq(1).click().should('have.text', 'X')
    cy.get('[data-type]').eq(4).click().should('have.text', 'O')
    cy.get('[data-type]').eq(2).click()
    cy.get('[data-type]').should('not.exist')

    cy.get("[data-cy='winner-section']").should('exist').and('be.visible')
    cy.get("[data-cy='winner-section-info']").should('exist').and('have.text', 'X wins!')
  })
})