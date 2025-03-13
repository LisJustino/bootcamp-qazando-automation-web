/// <reference types="cypress" />

// funcionalidades
describe("Login", () => {
    //cenários de teste (infinitos)
    beforeEach(() => {
        cy.viewport("ipad-mini")
    })

    //it.ony (roda apenas esse teste)
    it("Login com sucesso", () => {
        //DADO
        //abrir aplicação
        //cy.viewport("iphone-6") //mudar resolução para um outro aparelho
        cy.visit("https://automationpratice.com.br/login");
        //preencher -mail e senha
        cy.get('#user').type("edu@qazando.com");
        cy.get('#password').type("123456");

        //QUANDO
        //clicar no botão de login
        cy.get('#btnLogin').click();

        //ENTÃO
        //valida mensagem
        cy.get('#swal2-title').should("be.visible");
        cy.get('#swal2-title').should("have.text", "Login realizado");
    })

    it("E-mail inválido", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user').type("aaaaaaaa");
        cy.get('#password').type("123456");
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "E-mail inválido.");
    })

    it("E-mail vazio", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#password').type("123456");
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "E-mail inválido.");
    })

    it("Senha inválida", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user').type("edu@qazando.com");
        cy.get('#password').type("aaaaa");
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "Senha inválida.");
    })

    it("Senha vazia", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user').type("edu@qazando.com");
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "Senha inválida.");
    })

    it("E-mail inválido", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "E-mail inválido.");
    })
})


