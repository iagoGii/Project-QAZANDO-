/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';


describe('Cadastro de usuário', () => {

    const user_date = require('../fixtures/user_create.json')

    beforeEach('Acessando página de cadastro', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()
            .get('#user')
            .should('be.visible')
    })

    it('Validar campo nome vazio', () => {

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo nome deve ser prenchido')
    });

    it('Validar campo e-mail vazio', () => {

        cy.get('#user').type(user_date.name)

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Validar campo e-mail inválido', () => {

        cy.get('#user').type(user_date.name)

        cy.get('#email').should('be.visible').type('emailinválido')

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Validar campo senha vazio', () => {

        const name = faker.person.fullName()

        cy.get('#user').type(name)

        cy.get('#email').should('be.visible').type(faker.internet.email(name))

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Validar campo senha inválido', () => {

        cy.get('#user').type(user_date.name)

        cy.get('#email').should('be.visible').type(user_date.email)

        cy.get('#password').should('be.visible').type('123')

        cy.get('#btnRegister').click()

        cy.get('.errorLabel').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Validar campo senha com sucesso!', () => {

        cy.get('#user').type(user_date.name)

        cy.get('#email').should('be.visible').type(user_date.email)

        cy.get('#password').should('be.visible').type(user_date.password)

        cy.get('#btnRegister').click()

        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${user_date.name}`)


    });


});