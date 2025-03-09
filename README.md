Automação de Testes - Aplicação BugBank
Este repositório contém a automação de testes para a aplicação BugBank, utilizando Cypress. Os testes abordam as principais funcionalidades da aplicação, identificando e documentando problemas para garantir a qualidade do software.

📝 Objetivo
O objetivo deste projeto é realizar testes automatizados nos fluxos das funcionalidades de cada tela da aplicação BugBank e documentar os problemas encontrados durante a execução. A automação foi realizada utilizando o Cypress para garantir a eficiência e confiabilidade dos testes.

🖥️ Funcionalidades Testadas
📍 Tela de Cadastro
Casos de Teste Validados:

Criar conta com saldo ativado inicia com R$ 1.000,00.
Criar conta sem saldo ativado inicia com R$ 0,00.
Senha e confirmação de senha precisam ser iguais.
Cadastro bem-sucedido exibe o número da conta criada.
Problemas Identificados:

Mensagens de erro e placeholders inconsistentes.
Falhas de usabilidade e segurança, como a reutilização indevida de dados de cadastro.
📍 Tela de Login
Casos de Teste Validados:

Usuários válidos são redirecionados para a home.
Problemas Identificados:

Mensagens de erro não são exibidas corretamente.
Falta de clareza no título da tela e no botão de registro.
📍 Tela de Transferência
Casos de Teste Validados:

Transferências somente para contas válidas e com saldo suficiente.
Mensagens de sucesso e erro estão corretas para diferentes cenários.
Problemas Identificados:

Campos de entrada aceitam caracteres inválidos.
A interface de usuário apresenta inconsistências, como o estilo dos botões e a falta de redirecionamento para a tela de extrato.
🔧 Tecnologias Utilizadas
Cypress para automação de testes
JavaScript para escrita dos scripts de teste

📋 Contribuição
Sinta-se à vontade para contribuir com melhorias, correções ou sugestões. Se você encontrar algum bug, por favor, abra uma issue.
