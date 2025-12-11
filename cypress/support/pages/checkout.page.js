class CheckoutPage {
    preencherNome(nome) {
        cy.get('[data-test="firstName"]').type(nome)
    }
    preencherSobrenome(sobrenome) {
        cy.get('[data-test="lastName"]').type(sobrenome)
    }
    preencherCodigoPostal(codigoPostal) {
        cy.get('[data-test="postalCode"]').type(codigoPostal)
    }
    clicarContinuar() {
        cy.get('[data-test="continue"]').click()
    }
    preencherInformacoes(nome, sobrenome, codigoPostal) {
        this.preencherNome(nome)
        this.preencherSobrenome(sobrenome)
        this.preencherCodigoPostal(codigoPostal)
        this.clicarContinuar()
    }
    iniciarCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
    finalizarCompra() {
        cy.get('[data-test="finish"]').click()
    }
    validarMensagemErro(mensagem) {
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', mensagem)
    }

}

export default new CheckoutPage();