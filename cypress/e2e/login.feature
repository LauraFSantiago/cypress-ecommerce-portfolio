# language: pt

Funcionalidade: Painel de Login
  Como usuário do e-commerce
  Quero acessar minha conta
  Para comprar produtos

  Cenário: Login com sucesso
    Dado que acesso a página de login do Swag Labs
    Quando preencho o usuário "standard_user" e a senha "secret_sauce"
    E clico no botão de login
    Então devo ser redirecionado para a página de produtos