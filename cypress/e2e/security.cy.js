describe('Testes de Segurança (Security Smoke Tests) - STZ', () => {

  Cypress.on('uncaught:exception', (err, runnable) => { return false; });

  const payloadXSS = "<script>alert('XSS_TEST_LAURA')</script>";

  it('Deve bloquear tentativa de XSS na busca global', () => {
    cy.viewport(1400, 900);
    cy.visit('/');
  
    cy.wait(3000);

    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('input')
      .filter(':visible')
      .first()
      .clear()
      .type(`${payloadXSS}{enter}`);

    cy.then(() => {
      expect(stub).to.not.be.called;
    });

    cy.get('body').should('not.contain.html', payloadXSS);
  });
});