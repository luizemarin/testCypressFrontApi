/// <reference types="cypress" />

const baseUrlApi = Cypress.env("apiUrl");

export class UserRequests {
    static criarUsuario(payload) {
        return cy.request({
            method: "POST",
            url: `${baseUrlApi}/usuarios`,
            body: payload,
            failOnStatusCode: false,
        });
    }

    static excluirUsuario(email) {
        cy.request({
            method: "GET",
            url: `${baseUrlApi}/usuarios`,
            qs: { email: email },
        }).then((response) => {
            expect(response.status).to.eq(200);
            const usuarios = response.body.usuarios;
            const usuario = usuarios.find((u) => u.email === email);

            if (usuario) {
                cy.request({
                    method: "DELETE",
                    url: `${baseUrlApi}/usuarios/${usuario._id}`,
                }).then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(200);
                });
            }
        });
    }
}
