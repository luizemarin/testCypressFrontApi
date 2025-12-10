/// <reference types="cypress" />

export class Products {
    static cadastrarProduto(nome, preco, descricao, quantidade) {
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="preco"]').type(preco);
        cy.get('[data-testid="descricao"]').type(descricao);
        cy.get('[data-testid="quantity"]').type(quantidade);

        cy.get('[data-testid="cadastarProdutos"]').click();
    }

    static consultarProdutoTabela(nome) {
        cy.get("table").should("exist").should("be.visible");

        cy.get("table tbody tr").contains("td", nome).should("be.visible");
    }

    static excluirProduto(nomeProduto) {
        cy.get("table").should("exist").should("be.visible");

        cy.get("table tbody tr")
            .contains("td", nomeProduto)
            .parent("tr")
            .within(() => {
                cy.findByRole("button", { name: /excluir/i }).click();
            });

        cy.on("window:confirm", () => true);
    }
}
