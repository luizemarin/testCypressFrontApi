# 🧪 Test Cypress Front API

Projeto completo de testes **end-to-end (E2E)** e **testes de API** com Cypress. Valida funcionalidades de frontend e backend de uma aplicação integrada com:

-   🌐 Frontend: [https://front.serverest.dev](https://front.serverest.dev)
-   🔌 API: [https://serverest.dev](https://serverest.dev)

---

## 📋 O que é este projeto?

Este é um projeto profissional de testes automatizados que:

-   ✅ **Frontend**: Login, cadastro, listagem, edição e exclusão de usuários e produtos
-   ✅ **Backend**: Validações de endpoints da API (com e sem autenticação)
-   ✅ **Padrões**: Page Object Model (POM) e estrutura em camadas (requests)
-   ✅ **Integração**: Sincronização entre testes de frontend e backend

### Funcionalidades Testadas

#### 👥 Usuários

-   [x] Login automático com verificação de existência
-   [x] Cadastro de novos usuários
-   [x] Consulta de usuários na tabela
-   [x] Edição de usuários cadastrados
-   [x] Exclusão de usuários

#### 📦 Produtos

-   [x] Cadastro de produtos
-   [x] Consulta de produtos na tabela
-   [x] Exclusão de produtos com autenticação

#### 🔌 API (Backend)

-   [x] Validação de email obrigatório
-   [x] Validação de senha obrigatória
-   [x] Validação de email duplicado
-   [x] Cadastro bem-sucedido de usuário

---

## 🚀 Início Rápido

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/luizemarin/testCypressFrontApi.git
cd testCypressFrontApi
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

Isso instalará:

-   **Cypress** (v15.7.1) - Framework de testes E2E
-   **Testing Library Cypress** (v10.1.0) - Seletores acessíveis

### 3️⃣ Configurar Credenciais

Edite o arquivo `cypress.env.json` com suas credenciais:

```json
{
    "nameUser": "Seu Nome",
    "username": "seu_email@teste.com",
    "password": "sua_senha",
    "apiUrl": "https://serverest.dev",
    "frontUrl": "https://front.serverest.dev"
}
```

---

## 📝 Scripts Disponíveis

Todos os scripts estão configurados no `package.json`:

### 🖱️ Modo Interativo (Cypress UI)

```bash
npm run cy:open
```

Abre a interface gráfica do Cypress onde você pode:

-   Executar testes manualmente
-   Ver logs e screenshots em tempo real
-   Fazer debugging

### 🏃 Modo Headless (Terminal)

```bash
# Executar TODOS os testes (frontend + backend)
npm run cy:run

# Executar apenas testes de FRONTEND
npm run cy:front

# Executar apenas testes de API (BACKEND)
npm run cy:back
```

---

## 📁 Arquitetura do Projeto

```
testCypressFrontApi/
├── cypress/
│   ├── e2e/
│   │   ├── frontend/                 # Testes de interface
│   │   │   ├── pages/                # Page Objects
│   │   │   │   ├── homePage.js       # Página principal
│   │   │   │   ├── usersPage.js      # CRUD de usuários
│   │   │   │   └── productsPage.js   # CRUD de produtos
│   │   │   └── tests/
│   │   │       ├── users.cy.js
│   │   │       └── products.cy.js
│   │   │
│   │   └── backend/                  # Testes de API
│   │       ├── requests/
│   │       │   └── userRequests.js   # Requisições HTTP reutilizáveis
│   │       └── tests/
│   │           └── users.cy.js
│   │
│   ├── support/
│   │   ├── commands.js               # Comandos customizados do Cypress
│   │   └── e2e.js                    # Configuração global
│   │
│   └── fixtures/
│       └── example.json
│
├── cypress.config.js        # Configuração do Cypress
├── cypress.env.json         # Variáveis de ambiente
├── package.json             # Scripts e dependências
└── README.md                # Este arquivo
```

---

## 🎯 Padrões Utilizados

### Page Object Model (POM)

Cada página tem uma classe que encapsula elementos e ações da interface. Isso centraliza os seletores em um único lugar, tornando os testes mais fáceis de manter quando a interface muda.

Exemplo:

-   `HomePage` - Botões da página inicial
-   `UsersPage` - Operações CRUD de usuários
-   `ProductsPage` - Operações CRUD de produtos

### Requisições em Camada Separada

As requisições HTTP são centralizadas em classes reutilizáveis na pasta `backend/requests/`. Isso facilita o reuso entre testes e deixa o código mais organizado.

### Data Attributes

Todos os seletores usam `data-testid` para identificar elementos. Isso torna os testes resilientes a mudanças de CSS e estrutura HTML.

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta          | Versão | Propósito                            |
| ------------------- | ------ | ------------------------------------ |
| **Cypress**         | 15.7.1 | Framework principal de testes E2E    |
| **Testing Library** | 10.1.0 | Seletores acessíveis (`data-testid`) |
| **Node.js**         | 18+    | Runtime JavaScript                   |
| **Serverest API**   | -      | API REST para testes                 |

---

## 📖 Recursos Úteis

-   📚 [Documentação Cypress](https://docs.cypress.io)
-   🧪 [Testing Library](https://testing-library.com)
-   🌐 [Serverest API](https://serverest.dev)
-   🎓 [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

## 🤝 Contribuindo

Para adicionar novos testes:

1. **Frontend**: Adicione o teste em `cypress/e2e/frontend/tests/`
2. **Backend**: Adicione o teste em `cypress/e2e/backend/tests/`
3. **Page Objects**: Atualize `cypress/e2e/frontend/pages/` se necessário
4. **Requisições**: Atualize `cypress/e2e/backend/requests/` se necessário

---

## 👤 Autor

**Luiz Marin**
GitHub: [@luizemarin](https://github.com/luizemarin)
Repositório: [testCypressFrontApi](https://github.com/luizemarin/testCypressFrontApi)

---

**Happy Testing! 🚀✨**
