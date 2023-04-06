describe('Login Test and validate page title', () => {
   const UN = Cypress.env('USERNAME')
   const PD = Cypress.env('PASSWORD')
   const INC = Cypress.env('INCORRECT')
  before(() => {
    cy.visit("/")
  })
  beforeEach(() => {
    cy.get('input[placeholder="Email"]').type(UN)
    cy.get('#password').type(PD)
    cy.get('input[type="submit"]').click()
  })

  it('Logs into the application', () => {
    cy.title().should('eq', 'CampusTrack')
    cy.url().should('include', '/home')
  })

  afterEach(() => {
    cy.contains(UN).click()
    cy.get('i.fa.fa-sign-out').click();
  })

})
describe('Login with incorrect credential', () => {
  const UN = Cypress.env('USERNAME')
   const PD = Cypress.env('PASSWORD')
   const INC = Cypress.env('INCORRECT')
  it('When user try to login with incorret credential,proper error message should display', () => {
    cy.visit("/")
    cy.get('input[placeholder="Email"]').type(UN)
    cy.get('#password').type(INC)
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.contains('Invalid Email or Password').should('be.visible')
  })
})