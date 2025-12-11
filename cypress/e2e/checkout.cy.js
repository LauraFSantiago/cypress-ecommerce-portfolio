import loginPage from '../support/pages/login.page'
import inventoryPage from '../support/pages/inventory.page'
import checkoutPage from '../support/pages/checkout.page'
describe('Funcionalidade: Fluxo de Checkout', () => {
  beforeEach(() => {
    loginPage.acessar()
    loginPage.logar('standard_user', 'secret_sauce')
    inventoryPage.adicionarMochila()
    inventoryPage.acessarCarrinho()
  })

  it('Deve completar o checkout com sucesso', () => {
    checkoutPage.iniciarCheckout()
    checkoutPage.preencherInformacoes('Laura', 'Silva', '12345')
    checkoutPage.finalizarCompra()
    // Verificar se a compra foi finalizada
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })

  it('Deve validar mensagem de erro ao não preencher informações obrigatórias', () => {
    checkoutPage.iniciarCheckout()
    checkoutPage.clicarContinuar()
    // Verificar mensagem de erro
    checkoutPage.validarMensagemErro('Error: First Name is required')
  })
})
