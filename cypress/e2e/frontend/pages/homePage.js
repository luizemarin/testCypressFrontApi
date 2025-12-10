/// <reference types="cypress" />

export class HomePage {
    static clicarListarUsuarios() {
        cy.get('[data-testid="listarUsuarios"]').click();
    }

    static clicarCadastrarUsuarios() {
        cy.get('[data-testid="cadastrarUsuarios"]').click();
    }

    static clicarListarProdutos() {
        cy.get('[data-testid="listarProdutos"]').should("be.enabled").click();
    }

    static clicarCadastrarProdutos() {
        cy.get('[data-testid="cadastrarProdutos"]').click();
    }
}
