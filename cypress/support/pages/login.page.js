class LoginPage {
    acessar() {
        cy.visit('https://www.saucedemo.com/')
    }

    preencherUsuario(usuario) {
        cy.get('[data-test="username"]').type(usuario)
    }

    preencherSenha(senha) {
        cy.get('[data-test="password"]').type(senha)
    }

    clicarEntrar() {
        cy.get('[data-test="login-button"]').click()
    }

    validaErrorMensagem(mensagem) {
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', mensagem)
    }

    logar(usuario, senha) {
        this.preencherUsuario(usuario)
        this.preencherSenha(senha)
        this.clicarEntrar()
    }
}

export default new LoginPage();