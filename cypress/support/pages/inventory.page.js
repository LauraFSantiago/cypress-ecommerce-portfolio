class InventoryPage {
    adicionarMochila() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }
    adicionarLuzBike() {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    }
    acessarCarrinho() {
        cy.get('.shopping_cart_link').click()
    }
}

export default new InventoryPage();