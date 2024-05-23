/// <reference types="Cypress" />

Cypress.Commands.add('SaveRegister', () => {
    cy.get('#btnRegister').click()

})


Cypress.Commands.add('fillName', (name) => {
    cy.get('#user').type(name)

})


Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email').should('be.visible').type(email)

})


Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password').should('be.visible').type(password)

})