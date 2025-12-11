import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login do Swag Labs", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("preencho o usuário {string} e a senha {string}", (usuario, senha) => {
  cy.get('[data-test="username"]').type(usuario);
  cy.get('[data-test="password"]').type(senha);
});

When("clico no botão de login", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("devo ser redirecionado para a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get('.title').should('have.text', 'Products');
});