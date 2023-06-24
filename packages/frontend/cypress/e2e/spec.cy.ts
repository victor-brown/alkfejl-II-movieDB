describe('Frontpage loads', () => {
  it('Load Frontpage', () => {
    cy.visit('http://localhost:5173/')
  })
  it('Open menu', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.chakra-menu__menu-button').click()
  })
  it('Check Title Wording', () => {
    cy.visit('http://localhost:5173/')
    cy.title().should('eq', 'Open Movie Database')
  })
})




describe('Stars loads', () => {
  it('Load Stars', () => {
    cy.visit('http://localhost:5173/stars')
  })
})

describe('Movies loads', () => {
  it('Load Movies', () => {
    cy.visit('http://localhost:5173/movies')
  })
})

describe('Genres loads', () => {
  it('Load Genres', () => {
    cy.visit('http://localhost:5173/genres')
  })
})

describe('Directors loads', () => {
  it('Load Directors', () => {
    cy.visit('http://localhost:5173/directors')
  })
})
