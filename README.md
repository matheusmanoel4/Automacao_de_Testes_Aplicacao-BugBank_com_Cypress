# 🧪 Automação de Testes – BugBank

Este repositório contém a automação de testes da aplicação **BugBank**, utilizando o framework **Cypress**. Os testes cobrem os principais fluxos da aplicação, com o objetivo de garantir a qualidade, eficiência e segurança do sistema.

---

## 📌 Objetivo

Automatizar os testes das funcionalidades da aplicação BugBank, verificando comportamentos esperados e documentando eventuais falhas com clareza. A automação foi desenvolvida utilizando **Cypress**, garantindo testes rápidos, robustos e confiáveis.

---

## 🖥️ Funcionalidades Testadas

### 🧾 Tela de Cadastro

**Casos de Teste Validados:**
- ✅ Criar conta com saldo ativado inicia com **R$ 1.000,00**.
- ✅ Criar conta sem saldo ativado inicia com **R$ 0,00**.
- ✅ Validação de senha e confirmação de senha.
- ✅ Cadastro bem-sucedido exibe o número da conta.

**Problemas Identificados:**
- ⚠️ Mensagens de erro e placeholders inconsistentes.
- ⚠️ Reutilização indevida de dados de cadastro.
- ⚠️ Falhas de usabilidade e segurança.

---

### 🔐 Tela de Login

**Casos de Teste Validados:**
- ✅ Usuários válidos são redirecionados corretamente para a **home**.

**Problemas Identificados:**
- ⚠️ Mensagens de erro ausentes ou incorretas.
- ⚠️ Título e botão de registro pouco intuitivos.

---

### 💸 Tela de Transferência

**Casos de Teste Validados:**
- ✅ Transferências permitidas apenas com saldo suficiente e para contas válidas.
- ✅ Mensagens apropriadas para sucesso e falha.

**Problemas Identificados:**
- ⚠️ Campos de entrada aceitam caracteres inválidos.
- ⚠️ Inconsistências na interface (estilos de botão, redirecionamento ausente para extrato).

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Automação de testes E2E
- JavaScript – Linguagem utilizada para escrever os testes
