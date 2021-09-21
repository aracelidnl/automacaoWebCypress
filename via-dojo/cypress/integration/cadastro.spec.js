/// <reference types="cypress" />
import cadastroPage from "../support/pages/cadastro.page"
var faker = require ('faker')

context('Funcionalidade cadastro', () => {
    beforeEach(() => {
        cy.visit('cadastrarusuarios')
    });

    it('Deve fazer cadastro com sucesso', () => {
        cadastroPage.cadastroAdmin('Araceli', faker.internet.email(), 'teste')
        cy.wait(3000)
        cy.get('h1').should('contain','Bem Vindo')
    });

});