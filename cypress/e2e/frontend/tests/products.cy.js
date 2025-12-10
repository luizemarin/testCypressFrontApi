/// <reference types="cypress" />

import { HomePage } from "../pages/homePage";
import { Products } from "../pages/productsPage";

describe("Testes das funcionalidades de Produto", () => {
    const nomeProduto = "Produto Teste automatizado cypress front api";
    const descricaoProduto =
        "Descrição do Produto Teste automatizado cypress front api";

    beforeEach(() => {
        cy.userLogin();
    });

    context("Cadastro e Consulta de Produto", () => {
        after(() => {
            cy.excluirProduto(nomeProduto);
        });

        it("Realizar o cadastro de um novo produto e realizar a consulta", () => {
            HomePage.clicarCadastrarProdutos();
            Products.cadastrarProduto(
                nomeProduto,
                "99",
                descricaoProduto,
                "10"
            );

            Products.consultarProdutoTabela(nomeProduto);
        });
    });

    context("Exclusão de Produto", () => {
        beforeEach(() => {
            HomePage.clicarCadastrarProdutos();
            Products.cadastrarProduto(
                nomeProduto,
                "99",
                descricaoProduto,
                "10"
            );
        });

        it("Realizar a exclusão do produto cadastrado", () => {
            Products.excluirProduto(nomeProduto);
        });
    });
});
