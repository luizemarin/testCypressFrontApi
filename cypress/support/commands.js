/// <reference types="cypress" />

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("userLogin", () => {
    const nameUser = Cypress.env("nameUser");
    const email = Cypress.env("username");
    const password = Cypress.env("password");
    const baseUrlFront = Cypress.env("frontUrl");

    cy.request("GET", `${Cypress.env("apiUrl")}/usuarios`).then((response) => {
        const userAlreadyExists = response.body.usuarios.some(
            (u) => u.email === email
        );

        if (!userAlreadyExists) {
            cy.visit(baseUrlFront);
            cy.get('[data-testid="cadastrar"]').click();

            cy.get('[data-testid="nome"]').type(nameUser);
            cy.get('[data-testid="email"]').type(email);
            cy.get('[data-testid="password"]').type(password);

            cy.get('[data-testid="checkbox"]').check();
            cy.get('[data-testid="cadastrar"]').click();

            cy.findByText("Cadastro realizado com sucesso").should(
                "be.visible"
            );
        }

        cy.session([email, password], () => {
            cy.visit(baseUrlFront);
            cy.get('[data-testid="email"]').type(email);
            cy.get('[data-testid="senha"]').type(password);
            cy.get('[data-testid="entrar"]').click();
            cy.url().should("include", "/admin/home");
        });
    });

    cy.visit(`${baseUrlFront}/admin/home`);
});

Cypress.Commands.add("excluirUsuario", (email) => {
    cy.request({
        method: "GET",
        url: `${Cypress.env("apiUrl")}/usuarios`,
        qs: { email: email },
    }).then((response) => {
        expect(response.status).to.eq(200);
        const usuarios = response.body.usuarios;
        const usuario = usuarios.find((u) => u.email === email);

        if (usuario) {
            cy.request({
                method: "DELETE",
                url: `${Cypress.env("apiUrl")}/usuarios/${usuario._id}`,
            }).then((deleteResponse) => {
                expect(deleteResponse.status).to.eq(200);
            });
        }
    });
});

Cypress.Commands.add("excluirProduto", (nomeProduto) => {
    const email = Cypress.env("username");
    const password = Cypress.env("password");

    cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}/login`,
        body: {
            email: email,
            password: password,
        },
    }).then((loginResponse) => {
        const token = loginResponse.body.authorization;

        cy.request({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/produtos`,
            qs: { nome: nomeProduto },
        }).then((response) => {
            expect(response.status).to.eq(200);
            const produtos = response.body.produtos;
            const produto = produtos.find((p) => p.nome === nomeProduto);

            if (produto) {
                cy.request({
                    method: "DELETE",
                    url: `${Cypress.env("apiUrl")}/produtos/${produto._id}`,
                    headers: {
                        authorization: token,
                    },
                }).then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(200);
                });
            }
        });
    });
});
