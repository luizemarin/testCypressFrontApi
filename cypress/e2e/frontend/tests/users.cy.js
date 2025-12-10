/// <reference types="cypress" />

import { HomePage } from "../pages/homePage";
import { Users } from "../pages/usersPage";

describe("Testes das funcionalidades de Usuário", () => {
    beforeEach(() => {
        cy.userLogin();
    });

    after(() => {
        cy.excluirUsuario("jesualdo@jesualdo.com");
    });

    it("Realizar a consulta do usuário criado para o login", () => {
        HomePage.clicarListarUsuarios();
        Users.consultaUsuarioTabela("adroaldo_tester@testes.com");
    });

    it("Realizar o cadastro de um novo usuário e realizar a consulta", () => {
        HomePage.clicarCadastrarUsuarios();
        Users.criarUsuario(
            "Jesualdo Tester",
            "jesualdo@jesualdo.com",
            "senha1234"
        );

        Users.consultaUsuarioTabela("jesualdo@jesualdo.com");
    });
});
