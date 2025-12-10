/// <reference types="cypress" />

export class Users {
    static consultaUsuarioTabela(email) {
        cy.get("table").should("exist").should("be.visible");

        cy.get("table tbody tr").contains("td", email).should("be.visible");
    }

    static criarUsuario(nome, email, password) {
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(password);

        cy.get('[data-testid="checkbox"]').check();
        cy.get('[data-testid="cadastrarUsuario"]').click();
    }

    static excluirUsuario(email) {
        cy.get("table").should("exist").should("be.visible");

        cy.get("table tbody tr")
            .contains("td", email)
            .parent("tr")
            .within(() => {
                cy.get('[data-testid="excluirUsuario"]').click();
            });

        cy.on("window:confirm", () => true);
    }
}
