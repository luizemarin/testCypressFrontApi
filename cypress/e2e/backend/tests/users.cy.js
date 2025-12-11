/// <reference types="cypress" />

import { UserRequests } from "../requests/userRequests";

describe("Teste de api no endpoint de usuários", () => {
    const email = "testeadroaldo@teste.com";
    const uniqueEmail = `usuario${Date.now()}@teste.com`;

    before(() => {
        UserRequests.criarUsuario({
            nome: "Adroaldo Tester automacao cypress",
            email: email,
            password: "senha1234",
            administrador: "true",
        });
    });

    after(() => {
        UserRequests.excluirUsuario(email);
        UserRequests.excluirUsuario(uniqueEmail);
    });

    it("Não deve realizar o cadastro de usuário sem informar o email", () => {
        UserRequests.criarUsuario({
            nome: "Teste Sem Email",
            password: "senha1234",
            administrador: "true",
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.email).to.equal("email é obrigatório");
        });
    });

    it("Não deve realizar o cadastro de usuário sem informar a senha", () => {
        UserRequests.criarUsuario({
            nome: "Teste Sem Senha",
            email: "testesem@senha.com.br",
            administrador: "true",
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.password).to.equal("password é obrigatório");
        });
    });

    it("Não deve realizar o cadastro de usuário com email já cadastrado", () => {
        UserRequests.criarUsuario({
            nome: "Adroaldo Tester",
            email: email,
            password: "senha1234",
            administrador: "true",
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.message).to.equal(
                "Este email já está sendo usado"
            );
        });
    });

    it("Deve realizar o cadastro de usuário com sucesso", () => {
        UserRequests.criarUsuario({
            nome: "Usuario Teste Sucesso",
            email: uniqueEmail,
            password: "senha1234",
            administrador: "true",
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.equal(
                "Cadastro realizado com sucesso"
            );
        });
    });
});
