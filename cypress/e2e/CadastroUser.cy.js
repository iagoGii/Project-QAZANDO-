/// <reference types="Cypress" />

describe('Cadastro de usuário', () => {

    const user_date = require ('../fixtures/user_create.json')
    
    it('Validar campo nome vazio', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()
            .get('#user')
            .should('be.visible')

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo nome deve ser prenchido')
    });

    it('Validar campo e-mail vazio', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()

        cy.get('#user').should('be.visible').type(user_date.name)

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Validar campo e-mail inválido', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()

        cy.get('#user').should('be.visible').type(user_date.name)

        cy.get('#email').should('be.visible').type('emailinválido')

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Validar campo senha vazio', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()

        cy.get('#user').should('be.visible').type(user_date.name)

        cy.get('#email').should('be.visible').type(user_date.email)

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Validar campo senha inválido', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()

        cy.get('#user').should('be.visible').type(user_date.name)

        cy.get('#email').should('be.visible').type(user_date.email)

        cy.get('#password').should('be.visible').type('123')

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Validar campo senha com sucesso!', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()

        cy.get('#user').should('be.visible').type(user_date.name)

        cy.get('#email').should('be.visible').type(user_date.email)

        cy.get('#password').should('be.visible').type(user_date.password)

        cy.get('#btnRegister').click()

        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${user_date.name}`)


    });


});