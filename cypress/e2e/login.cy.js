import loginPage from '../support/pages/login.page'
describe('Funcionalidade: Login no Swag Labs (com page objects)', () => {
  beforeEach(() => {
    loginPage.acessar()
  })

  it('Deve fazer login com sucesso', () => {
    loginPage.logar('standard_user', 'secret_sauce')
    // Verifica se o login foi bem-sucedido
    cy.url().should('include', '/inventory.html')
  })

  it('Deve exibir erro com senha inválida', () => {
    loginPage.logar('standard_user', 'senha_errada')
    loginPage.validaErrorMensagem('Epic sadface: Username and password do not match any user in this service')
  })
})