import loginPage from '../support/pages/login.page'
import inventoryPage from '../support/pages/inventory.page'

describe('Funcionalidade: Fluxo de Compras', () => {
  beforeEach(() => {
    loginPage.acessar()
    loginPage.logar('standard_user', 'secret_sauce')
  })

  it('Deve adicionar produtos ao carrinho com sucesso', () => {
    inventoryPage.adicionarMochila()
    inventoryPage.adicionarLuzBike()

    // checar se os itens foram add
    cy.get('.shopping_cart_badge').should('have.text', '2')
  })

  it('Deve remover um produto do carrinho', () => {
    inventoryPage.adicionarMochila()
    // btn muda o nome apos clicar o seletor vira "remove"
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    // carrinho deve estar vazio
    cy.get('.shopping_cart_badge').should('not.exist')
  })
})