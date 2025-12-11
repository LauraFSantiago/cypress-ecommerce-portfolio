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

  # O Esquema do Cenário entra logo abaixo, dentro da MESMA funcionalidade
  Esquema do Cenário: Validar login com diferentes tipos de usuários
    Dado que acesso a página de login do Swag Labs
    Quando preencho o usuário "<usuario>" e a senha "<senha>"
    E clico no botão de login
    Então devo ver a mensagem "<mensagem_esperada>"

    Exemplos:
      | usuario         | senha        | mensagem_esperada                                         |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.       |
      | user_not_found  | secret_sauce | Epic sadface: Username and password do not match any user |
      | standard_user   | wrong_pass   | Epic sadface: Username and password do not match any user |
      |                 | secret_sauce | Epic sadface: Username is required                        |