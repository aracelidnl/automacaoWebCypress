class CadastroPage {

    cadastroAdmin(nome, email, senha){
        cy.get('[data-testid=nome]').type(nome)
        cy.get('[data-testid=email]').type(email)
        cy.get('[data-testid=senha]').type(senha)
        cy.get('[data-testid=checkbox]').check()
        cy.get('[data-testid=cadastrar]').click()
    }

    cadastroNormal(nome, email, senha){
        cy.get('[data-testid=nome]').type(nome)
        cy.get('[data-testid=email]').type(email)
        cy.get('[data-testid=senha]').type(senha)
        cy.get('[data-testid=cadastrar]').click()
    }

}
 export default new CadastroPage()
