/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';


describe('Cadastro de usuário', () => {

    const user_date = require('../fixtures/user_create.json')

    beforeEach('Acessando página de cadastro', () => {

        //Acessar tela de cadastro de usuário
        cy.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {

        cy.SaveRegister()
        cy.get('.errorLabel').should('have.text', 'O campo nome deve ser prenchido')

    });

    it('Validar campo e-mail vazio', () => {

        cy.fillName(user_date.name)
        cy.SaveRegister()
        cy.get('.errorLabel').should('have.text', 'O campo e-mail deve ser prenchido corretamente')

    });

    it('Validar campo e-mail inválido', () => {

        cy.fillName(user_date.name)
        cy.fillEmail('emailinválido')
        cy.SaveRegister()
        cy.get('.errorLabel').should('have.text', 'O campo e-mail deve ser prenchido corretamente')

    });

    it('Validar campo senha vazio', () => {

        const name = faker.person.fullName()

        cy.fillName(name)
        cy.fillEmail(faker.internet.email(name))
        cy.SaveRegister()
        cy.get('.errorLabel').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

    });

    it('Validar campo senha inválido', () => {

        cy.fillName(user_date.name)
        cy.fillEmail(user_date.email)
        cy.fillPassword('123')
        cy.SaveRegister()
        cy.get('.errorLabel').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

    });

    it('Validar campo senha com sucesso!', () => {

        cy.fillName(user_date.name)
        cy.fillEmail(user_date.email)
        cy.fillPassword(user_date.password)
        cy.SaveRegister()
        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
        cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${user_date.name}`)


    });


});