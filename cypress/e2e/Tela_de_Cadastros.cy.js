describe('Tela_de_Cadastros', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
  })

  it ("Clicando no botão de Registrar", () => {
    cy.clicarBotaoRegistrar()
    cy.wait(2000)
  })
  
  it ("Verificando se os campos de Nome, Email, Senha e Confirmação de senha são de preenchimento obrigatório", () => {
    cy.clicarBotaoRegistrar()
    cy.wait(2000)
    cy.Preencher_campo_de_Email()
    cy.Clicar_Botao_Cadastrar()
    cy.Preencher_campo_de_Nome()
    cy.Clicar_Botao_Cadastrar()
    cy.Preencher_o_campo_de_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.wait(2000)
  })


  it ("Tentativa de cadastro sem preencher nome deve visualizar a mensagem Nome não pode ser vazio",() => {
    cy.wait(2000)
    cy.clicarBotaoRegistrar()
    cy.wait(2000)
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.get('#modalText', { timeout: 10000 }).should('be.visible')
    cy.wait(2000)
  })
  it ("Tentativa de cadastro sem preencher email deve visualizar a mensagem Email não pode ser vazio",() => {
    cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.wait(2000)
  })
  it ("Tentativa de cadastro sem preencher senha deve visualizar a mensagem Senha não pode ser vazio",() => {
    cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.wait(2000)

  })
  it ("Tentativa de cadastro sem preencher confirmação de senha deve visualizar a mensagem Confirmar senha não pode ser vazio",() => {
    cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.wait(2000)
  })
  it ("Deixar ativo a opção Criar conta com saldo deve criar conta com saldo de R$ 1.000,00",() => {
    cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.get('#toggleAddBalance').click({ force: true })
    cy.Clicar_Botao_Cadastrar()
    cy.Clicar_no_botão_de_Fechar_apos_criar_a_conta()
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.Clicando_no_botão_de_Extrato()
    cy.wait(2000)
    cy.get('.bank-statement__ContainerDescAndValue-sc-7n8vh8-15', { timeout: 10000 }).should('be.visible')
  })    

  it ("Deixar inativo a opção Criar conta com saldo deve criar conta com saldo de R$ 0,00",() => {
  cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.Clicar_no_botão_de_Fechar_apos_criar_a_conta()
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.Clicando_no_botão_de_Extrato()
    cy.wait(2000)
    cy.get('.bank-statement__ContainerDescAndValue-sc-7n8vh8-15', { timeout: 10000 }).should('be.visible')

  })

  it ("Senha e confirmação de senha precisam ser iguais",() => {
  cy.clicarBotaoRegistrar()
  cy.Preencher_campo_de_Nome()
  cy.Preencher_campo_de_Email()
  cy.Preencher_o_campo_de_Senha()
  cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("TESTE 1235", { force: true })
  cy.Clicar_Botao_Cadastrar()
  cy.wait(2000)
  cy.get('#btnCloseModal').click()
  cy.get(':nth-child(4) > .login__eye').click({ force: true })
  cy.get(':nth-child(5) > .login__eye').click({ force: true })
  cy.wait(2000)
  cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true })
  cy.Preencher_o_campo_de_Confirmar_Senha()
  cy.wait(2000)
  cy.Clicar_Botao_Cadastrar()
  cy.wait(2000)
  })

  it ("Cadastrar conta com sucesso deve exibir número da conta criada",() => {
  cy.clicarBotaoRegistrar()
  cy.Preencher_campo_de_Nome()
  cy.Preencher_campo_de_Email()
  cy.Preencher_o_campo_de_Senha()
  cy.Preencher_o_campo_de_Confirmar_Senha()
  cy.get('#toggleAddBalance').click({ force: true })
  cy.Clicar_Botao_Cadastrar()
  cy.get('.styles__ContainerInformations-sc-8zteav-3').should('be.visible')
  cy.wait(2000)
  })

  it ("Os campos na tela de cadastro permanecem preenchidos com os dados da última conta cadastrada ao retornar à tela.", () => {
    cy.Cadastrando_uma_conta()
    cy.clicarBotaoRegistrar()
    cy.wait(3000)

  })
  
  it ("Na tela de cadastro, o retorno à tela de login só é possível clicando no texto, e não na seta ao lado", () => {
    cy.clicarBotaoRegistrar()
    cy.wait(2000)
    cy.get('#btnBackButton').click({ force: true })
    cy.wait(2000)

  })

  it ("Ao cadastrar uma nova conta, o sistema permite o uso das mesmas informações do cadastro anterior, o que representa uma falha de segurança", () => {
    cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.Clicar_Botao_Cadastrar()
    cy.Clicar_no_botão_de_Fechar_apos_criar_a_conta()
    cy.clicarBotaoRegistrar()
    cy.wait(4000)
    cy.Clicar_Botao_Cadastrar()


  })
  })

