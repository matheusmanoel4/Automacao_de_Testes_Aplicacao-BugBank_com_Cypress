describe('Tela_de_Login', () => {
    beforeEach(() => {
      cy.visit('https://bugbank.netlify.app/')
    })

it ("Email e Senha são campos obrigatórios.",() => {
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').clear({ force: true })
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').clear({ force: true })
  })

  it ("Tentativa de acesso sem preencher campos obrigatórios deve exibir a mensagem Usuário e senha precisam ser preenchidos",() => {
  cy.Clicando_no_botão_de_Login()
  cy.wait(2000)
  })
    
  it ("Não deve autorizar o acesso para usuários inválidos ou não cadastrados.", () => {
    cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.Clicar_no_botão_de_Fechar_apos_criar_a_conta()
    cy.Clicando_no_botão_de_Login()
  })

    it ("Inserir um email inválido, uma senha válida e clicar no botão de login", () => {  
    cy.Cadastrando_uma_conta()
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("TESTE2@GMAIL.COM", { force: true }) // email invalido 
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.Clicando_no_botão_de_Fechar_na_mensagem_de_usuario_e_senha_invalido()
    cy.wait(2000)
  })

    it ("Inserir um email válido, uma senha inválida e clicar no botão de login", () => { 
    cy.Cadastrando_uma_conta()
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("TESTE 1234", { force: true }) //senha invalida
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.Clicando_no_botão_de_Fechar_na_mensagem_de_usuario_e_senha_invalido()
    cy.wait(2000)
  })

    it ("Inserir um email inválido e senha inválida e clicar no botão de login" , () => {
    cy.Cadastrando_uma_conta()
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("TESTE2@GMAIL.COM", { force: true }) // email invalido 
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("TESTE 1234", { force: true }) //senha invalida
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)

    })


    it ("Inserir um email válido e uma senha vazia e clicar no botão de login", () => {
    cy.Cadastrando_uma_conta()
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
  })


    it ("Inserir um email válido e senha válida e clicar no botão de login", () => {
    cy.Cadastrando_uma_conta()
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.get('.home__ContainerLink-sc-1auj767-2').click()
  })

  it ("Usuários válidos e cadastros são direcionados para a home.", () => {
    cy.Cadastrando_uma_conta()
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.get('.home__ContainerLink-sc-1auj767-2').click()
    cy.wait(2000)
  })
  })

