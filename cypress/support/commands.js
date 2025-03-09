Cypress.Commands.add('clicarBotaoRegistrar', () => {
    cy.get('.ihdmxA').click()
  })

Cypress.Commands.add('Clicar_Botao_Cadastrar', () => {
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
})

Cypress.Commands.add('Preencher_campo_de_Email', () => { 
    cy.get(':nth-child(2) > .input__default').type("TESTE@GMAIL.COM", { force: true })
})

Cypress.Commands.add('Preencher_campo_de_Nome', () => { 
    cy.get(':nth-child(3) > .input__default').type("Matheus Teste", { force: true })
})

Cypress.Commands.add('Preencher_o_campo_de_Senha', () => { 
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("TESTE 123", { force: true })
})

Cypress.Commands.add('Preencher_o_campo_de_Confirmar_Senha', () => {
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("TESTE 123", { force: true })
})


Cypress.Commands.add('Clicar_no_botão_de_Fechar_apos_criar_a_conta', () => {
    cy.get('#btnCloseModal').click()
})

Cypress.Commands.add('Preenchendo_o_campo_de_Email_na_tela_de_Login', () => {
cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("TESTE@GMAIL.COM", { force: true })
})

Cypress.Commands.add('Preenchendo_o_campo_de_Senha_na_tela_de_Login', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("TESTE 123", { force: true })
})

Cypress.Commands.add('Clicando_no_botão_de_Login', () => {
cy.get('.otUnI').click()

})
Cypress.Commands.add('Clicando_no_botão_de_Extrato', () => {
cy.get('#btn-EXTRATO').click()

})

Cypress.Commands.add('Clicando_no_botão_de_Fechar_na_mensagem_de_usuario_e_senha_invalido', () => {
    cy.get('#btnCloseModal').click()
})

Cypress.Commands.add('Cadastrando_uma_conta', () => {
    cy.clicarBotaoRegistrar()
    cy.Preencher_campo_de_Nome()
    cy.Preencher_campo_de_Email()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.get(':nth-child(4) > .login__eye').click({ force: true })
    cy.get(':nth-child(5) > .login__eye').click({ force: true })
    cy.get('#toggleAddBalance').click({ force: true })
    cy.wait(2000)
    cy.Clicar_Botao_Cadastrar()
    cy.Clicar_no_botão_de_Fechar_apos_criar_a_conta()
})

Cypress.Commands.add('Cadastrando_uma_conta_2', () => {
    cy.clicarBotaoRegistrar()
    cy.get(':nth-child(2) > .input__default').clear({ force: true }) // limpando o campo de email
    cy.get(':nth-child(3) > .input__default').clear({ force: true }) // limpando o campo de nome
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }) // limpando o campo de senha
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }) // limpando o campo de confirmar senha
    cy.get(':nth-child(2) > .input__default').type("TESTE2@GMAIL.COM", { force: true })
    cy.Preencher_campo_de_Nome()
    cy.Preencher_o_campo_de_Senha()
    cy.Preencher_o_campo_de_Confirmar_Senha()
    cy.get(':nth-child(4) > .login__eye').click({ force: true })
    cy.get(':nth-child(5) > .login__eye').click({ force: true })
    cy.wait(2000)
    cy.Clicar_Botao_Cadastrar()
    cy.Salvando_numero_de_conta()
    cy.Clicar_no_botão_de_Fechar_apos_criar_a_conta()
})


Cypress.Commands.add("Salvando_numero_de_conta", () => {
    cy.get('#modalText') 
        .invoke('text')
        .then((text) => {
            const match = text.match(/(\d{3})-(\d)/); 
            if (match) {
                const firstThreeDigits = match[1]; 
                const lastDigit = match[2]; 
                
                cy.wrap(firstThreeDigits).as('accountNumber'); 
                cy.wrap(lastDigit).as('accountDigit'); 
            }
        });
});



Cypress.Commands.add("Clicando_botão_Tranferencia", () => {
    cy.get('#btn-TRANSFERÊNCIA').click()
});


Cypress.Commands.add("Preenchendo_o_campo_de_Conta_e_digito", () => {

    cy.get('@accountNumber').then((accountNumber) => {
        cy.get(':nth-child(1) > .input__default').clear().type(accountNumber); 
    });

    cy.get('@accountDigit').then((accountDigit) => {
        cy.get('.account__data > :nth-child(2) > .input__default').clear().type(accountDigit); 
    });
});


Cypress.Commands.add('Preenchendo_valor_da_tranferencia', () => {
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("500", { force: true })
})


Cypress.Commands.add('Preenchendo_Descrição', () => {
cy.get(':nth-child(3) > .input__default').type("Teste de transferência", { force: true })
})


Cypress.Commands.add('Clicando_botão_Transferir_agora', () => {
    cy.get('.style__ContainerButton-sc-1wsixal-0').click()
})
