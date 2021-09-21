/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    //hooks - ganchos
    /*
    antes de todos os cenários => before
    antes de cada cenário => before Each

    depois de todos os cenários => after
    depois de cada cenário => after Each
    */
    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('araceli@via.com', 'teste')
        cy.wait(5000)
        cy.get('h1').should('contain', 'Serverest Store')
        cy.url().should('include', 'home')
    });

    it('deve exibir uma mensagem de erro ao inserir usuario ou senha inválido', () => {
        cy.login('araceli@via.com', 'te333ste')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

});