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
