describe('API - Testes de Integração de Usuários', () => {
    // GET todos os users
    it('Deve listar usuários cadastrados com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((response) => {
            // status 200 - ok
            expect(response.status).to.equal(200)
            // corpo da resposta deve ter a propriedade usuarios
            expect(response.body).to.have.property('usuarios')
            // tempo de resposta deve ser rapido
            expect(response.duration).to.be.lessThan(2000) // less 2s
        })
    })

    // POST novo user
    it('Deve cadastrar um novo usuário com sucesso', () => {
        // erar um email aleatório usando a hora exata, evita erro de email já cadastrado
        const emailAleatorio = `laura.qa${Date.now()}@teste.com`

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": "Laura Santiago QA",
                "email": emailAleatorio,
                "password": "teste",
                "administrador": "true"
            }
        }).then((response) => {
            // status deve ser 201 - ok
            expect(response.status).to.equal(201)
            // msg de ok da API
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
})