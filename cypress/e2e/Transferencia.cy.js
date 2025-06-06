describe('Transferencia', () => {
    beforeEach(() => {
      cy.visit('https://bugbank.netlify.app/')
    })

    it ("Só é permitido transferência para contas válidas", () => {
        cy.Cadastrando_uma_conta()
        cy.Cadastrando_uma_conta_2()
        cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_botão_Tranferencia()
        cy.get(':nth-child(1) > .input__default').type("123", { force: true })
        cy.get('.account__data > :nth-child(2) > .input__default').type("123", { force: true })
        cy.Preenchendo_valor_da_tranferencia()
        cy.Preenchendo_Descrição()
        cy.Clicando_botão_Transferir_agora()
        cy.wait(5000)
        cy.get('#btnCloseModal').click()
        cy.get(':nth-child(1) > .input__default').clear({force: true})
        cy.get('.account__data > :nth-child(2) > .input__default').clear({ force: true })
        cy.Preenchendo_o_campo_de_Conta_e_digito() 
        cy.Clicando_botão_Transferir_agora()
        cy.get('#btnCloseModal').click()
        cy.get('#btnBack').click()
        cy.Clicando_no_botão_de_Extrato()
        cy.wait(2000)
        cy.get('.bank-statement__ContainerLink-sc-7n8vh8-2').click()
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("TESTE2@GMAIL.COM", { force: true })
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_no_botão_de_Extrato()
        cy.wait(2000)
})

it ("Só é permitido transferência quando saldo é igual ou maior que valor para transferir", () => { 
    cy.Cadastrando_uma_conta()
    cy.Cadastrando_uma_conta_2()
    cy.wait(2000)
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.Clicando_botão_Tranferencia()
    cy.Preenchendo_o_campo_de_Conta_e_digito()
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("1500", { force: true })
    cy.Preenchendo_Descrição()
    cy.Clicando_botão_Transferir_agora()
    cy.wait(2000)
    cy.get('#btnCloseModal').click()
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').clear({force: true})
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("-1000", { force: true })
    cy.Clicando_botão_Transferir_agora()
    cy.wait(2000)
    cy.get('#btnCloseModal').click()
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').clear({force: true})
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("1000", { force: true })
    cy.Clicando_botão_Transferir_agora()
    cy.wait(2000)
})


it ("Tentativa de transferência para conta inválida deve exibir mensagem de erro Conta inválida ou inexistente", () => {
    cy.Cadastrando_uma_conta()
        cy.Cadastrando_uma_conta_2()
        cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_botão_Tranferencia()
        cy.get(':nth-child(1) > .input__default').type("123", { force: true })
        cy.get('.account__data > :nth-child(2) > .input__default').type("123", { force: true })
        cy.Preenchendo_valor_da_tranferencia()
        cy.Preenchendo_Descrição()
        cy.Clicando_botão_Transferir_agora()

    
})



it("Número e digito da conta aceitam apenas numeros", () => {
    cy.Cadastrando_uma_conta()
    cy.Cadastrando_uma_conta_2()
    cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
    cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
    cy.Clicando_no_botão_de_Login()
    cy.wait(2000)
    cy.Clicando_botão_Tranferencia()
    cy.get(':nth-child(1) > .input__default').type("teste", { force: true })
    cy.get('.account__data > :nth-child(2) > .input__default').type("teste", { force: true })
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("100", { force: true })
    cy.Preenchendo_Descrição()
    cy.Clicando_botão_Transferir_agora()

})


it ("Campo descrição é um campo de preenchimento obrigatório", () => {
        cy.Cadastrando_uma_conta()
        cy.Cadastrando_uma_conta_2()
        cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_botão_Tranferencia()
        cy.Preenchendo_o_campo_de_Conta_e_digito() 
        cy.Preenchendo_valor_da_tranferencia()
        cy.wait(3000)
        cy.Clicando_botão_Transferir_agora()
})


    it("Só é permitido transferência quando saldo é igual ou maior que valor para transferir", () => { 
        cy.Cadastrando_uma_conta()
        cy.Cadastrando_uma_conta_2()
        cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_botão_Tranferencia()
        cy.Preenchendo_o_campo_de_Conta_e_digito()
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("0", { force: true })
        cy.Preenchendo_Descrição()
        cy.Clicando_botão_Transferir_agora()
        cy.wait(2000)
        cy.get('#btnCloseModal').click()
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').clear({force: true})
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("-900", { force: true })
        cy.Clicando_botão_Transferir_agora()
        cy.wait(2000)
    })  

    it ("Ao realizar transferência com sucesso deve ser debitado o valor da conta e exibir a mensagem de Transferência realizada com sucesso", () => { 
        cy.Cadastrando_uma_conta()
        cy.Cadastrando_uma_conta_2()
        cy.wait(2000)
        cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_botão_Tranferencia()
        cy.Preenchendo_o_campo_de_Conta_e_digito() 
        cy.Preenchendo_valor_da_tranferencia()
        cy.Preenchendo_Descrição()
        cy.wait(3000)
        cy.Clicando_botão_Transferir_agora()
        cy.wait(2000)
        cy.get('#btnCloseModal').click()
        cy.get('#btnBack').click()
        cy.Clicando_no_botão_de_Extrato()
        cy.wait(2000)
        
})

    it ("Ao realizar uma transferência com sucesso deve ser redirecionado para o extrato", () => {
        cy.Cadastrando_uma_conta()
        cy.Cadastrando_uma_conta_2()
        cy.wait(2000)
        cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_botão_Tranferencia()
        cy.Preenchendo_o_campo_de_Conta_e_digito() 
        cy.Preenchendo_valor_da_tranferencia()
        cy.Preenchendo_Descrição()
        cy.wait(3000)
        cy.Clicando_botão_Transferir_agora()
        cy.wait(2000)
        cy.get('#btnCloseModal').click()
    })


// não conformes 
    it ("Se eu inserir um valor com casas decimais ou caracteres inválidos ao fazer uma transferência, o sistema exibe um erro e impede a operação", () => {
        cy.Cadastrando_uma_conta()
        cy.Cadastrando_uma_conta_2()
        cy.Preenchendo_o_campo_de_Email_na_tela_de_Login()
        cy.Preenchendo_o_campo_de_Senha_na_tela_de_Login()
        cy.Clicando_no_botão_de_Login()
        cy.wait(2000)
        cy.Clicando_botão_Tranferencia()
        cy.get(':nth-child(1) > .input__default').type("123", { force: true })
        cy.get('.account__data > :nth-child(2) > .input__default').type("123", { force: true })
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("561,2", { force: true })
        cy.Preenchendo_Descrição()
        cy.Clicando_botão_Transferir_agora()    

})
})
