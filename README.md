# Finance Manager API (Backend)

API para um aplicativo de gestão financeira.

## 📝 Descrição

Esta é a API RESTful para um aplicativo de gestão financeira, onde você pode controlar suas receitas, despesas, categorias, criar metas, orçamentos e gerar relatórios.
 A API foi construída para facilitar o desenvolvimento do fronted para mobile e web da aplicação.

## ✨ Funcionalidades

*   Autenticação de usuários (cadastro, login, logout).
*   Gerenciamento de transações (criar, listar, obter, atualizar, deletar).
*   Gerenciamento de categorias financeiras (criar, listar, obter, atualizar, deletar).
*  Geração de relatórios de saldo, receitas e despesas por período.
*   Gerenciamento de orçamentos (criar, listar, obter, atualizar, deletar).
*   Gerenciamento de metas (criar, listar, obter, atualizar, deletar, marcar como concluída).
* Validação de dados de entrada.
 * Tratamento de erros.
 * Proteção da API com headers de segurança.

## 🚀 Tecnologias Utilizadas

*   **JavaScript:** Linguagem de programação principal.
*   **Node.js:** Ambiente de execução JavaScript para o backend.
*   **Express.js:** Framework web para o backend.
*   **MongoDB Atlas:** Banco de dados NoSQL.
*   **Mongoose:** Biblioteca para modelagem de dados com o MongoDB.
 * **dotenv:** Biblioteca para variaveis de ambiente.
 * **bcrypt:** Biblioteca para criptografia de senhas.
 * **jsonwebtoken:** Biblioteca para geração de tokens JWT.
*   **express-validator:** Biblioteca para validação de dados de requisição.
*   **helmet:** Middleware de segurança para HTTP headers.
*   **Git:** Para versionamento do código.
*  **npm:** Gerenciador de pacotes do Node.js.

## 🎯 Aprendizados

*   Criação de APIs RESTful com Node.js e Express.
*   Conexão com o MongoDB Atlas.
*   Criação de modelos de dados com Mongoose.
*   Autenticação de usuários com tokens JWT.
*  Implementação de middlewares para validação e tratamento de erros.
 * Criação de rotas com Express
*   Proteção de APIs com headers de segurança
*   Testes de API com Postman 
*   Versionamento de código com Git.



## Endpoints:

### Usuários

#### Cadastro de Usuário
* **Método:** `POST`
* **URL:** `/usuarios/cadastro`
* **Headers:**
    * `Content-Type: application/json`
* **Corpo da Requisição:**
```json
{
   "nome": "Nome do usuário",
   "email": "email@exemplo.com",
   "senha": "senha123"  
}
```
* **Resposta (201 Created):**
```json
    {
       "usuario": {
          "_id": "6516d394953c537f59f9440e",
          "nome": "Seu Nome",
          "email": "seuemail@exemplo.com",
          "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE2ZDM5NDk1M2M1MzdmNTlmOTQ0MGUiLCJpYXQiOjE2OTYwMDgyNjksImV4cCI6MTY5NjYxMzA2OX0.t6iM-t6iM-t6iM-t6iM-t6iM-t6iM-t6iM-t6iM"
    }
```

#### Login do Usuário
* **Método:** `POST`
* **URL:** `/usuarios/login`
* **Headers:**
    * `Content-Type: application/json`
* **Corpo da Requisição:**
```json
 {
    "email": "email@exemplo.com",
    "senha": "senha123"
 }
```
* **Resposta (200 OK):**
```json
   {
       "usuario": {
          "_id": "6516d394953c537f59f9440e",
          "nome": "Seu Nome",
          "email": "seuemail@exemplo.com",
          "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE2ZDM5NDk1M2M1MzdmNTlmOTQ0MGUiLCJpYXQiOjE2OTYwMDgyNjksImV4cCI6MTY5NjYxMzA2OX0.t6iM-t6iM-t6iM-t6iM-t6iM-t6iM-t6iM-t6iM"
    }
```

#### Logout do Usuário
* **Método:** `POST`
* **URL:** `/usuarios/logout`
* **Headers:**
    * `Authorization: Bearer SEU_TOKEN`
* **Resposta (200 OK):**
```json
{
   "message": "Logout realizado com sucesso"
}
```

### Transações

#### Criar Transação
*   **Método:** `POST`
*   **URL:** `/transacoes`
*   **Headers:**
      *   `Content-Type: application/json`
       *   `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
{
    "tipo": "receita" ou "despesa",
    "valor": 100,
    "categoria": "Categoria",
    "descricao": "Descrição opcional"
}
```
*   **Resposta (201 Created):**
```json
{
    "message": "Transação criada com sucesso",
    "transacao": {
       "_id": "6516d394953c537f59f9440e",
       "tipo": "receita",
       "valor": 100,
       "categoria": "Categoria",
       "descricao": "Descrição opcional",
       "usuarioId": "6516d394953c537f59f9440e",
        "__v": 0
    }
 }
```
#### Listar Transações
*   **Método:** `GET`
*   **URL:** `/transacoes`
    *   **Headers:**
        *   `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
    [
      {
        "_id": "6516d394953c537f59f9440e",
        "tipo": "receita",
         "valor": 100,
         "categoria": "Categoria",
         "descricao": "Descrição opcional",
         "usuarioId": "6516d394953c537f59f9440e",
         "__v": 0
      },
    ...
   ]
```
#### Obter Transação por ID
*   **Método:** `GET`
*   **URL:** `/transacoes/:id`
    *   **Headers:**
        *   `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
  {
     "_id": "6516d394953c537f59f9440e",
     "tipo": "receita",
     "valor": 100,
     "categoria": "Categoria",
     "descricao": "Descrição opcional",
     "usuarioId": "6516d394953c537f59f9440e",
     "__v": 0
 }
```
#### Atualizar Transação
*   **Método:** `PUT`
*   **URL:** `/transacoes/:id`
    *   **Headers:**
        *  `Content-Type: application/json`
        *  `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
    {
     "tipo": "receita" ou "despesa",
     "valor": 100,
     "categoria": "Categoria",
     "descricao": "Descrição opcional"
    }
```
*   **Resposta (200 OK):**
```json
    {
      "message": "Transação atualizada com sucesso",
      "transacao": {
         "_id": "6516d394953c537f59f9440e",
         "tipo": "receita",
         "valor": 100,
         "categoria": "Categoria",
         "descricao": "Descrição opcional",
         "usuarioId": "6516d394953c537f59f9440e",
         "__v": 0
     }
  }
```
#### Deletar Transação
*   **Método:** `DELETE`
*   **URL:** `/transacoes/:id`
    *  **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
{
  "message": "Transação deletada com sucesso"
}
```
### Categorias

#### Criar Categoria
*   **Método:** `POST`
*   **URL:** `/categorias`
    *   **Headers:**
        * `Content-Type: application/json`
        * `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
 {
     "nome": "Nome da categoria"
 }
```
*   **Resposta (201 Created):**
```json
{
    "message": "Categoria criada com sucesso",
      "categoria": {
         "_id": "6516d394953c537f59f9440e",
         "nome": "Nome da categoria",
         "usuarioId": "6516d394953c537f59f9440e",
          "__v": 0
      }
}
```
#### Listar Categorias
*   **Método:** `GET`
*   **URL:** `/categorias`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
    [
     {
         "_id": "6516d394953c537f59f9440e",
         "nome": "Nome da categoria",
         "usuarioId": "6516d394953c537f59f9440e",
          "__v": 0
      },
     ...
    ]
```
#### Obter Categoria por ID
*   **Método:** `GET`
*   **URL:** `/categorias/:id`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
{
    "_id": "6516d394953c537f59f9440e",
    "nome": "Nome da categoria",
    "usuarioId": "6516d394953c537f59f9440e",
     "__v": 0
 }
```
#### Atualizar Categoria
*   **Método:** `PUT`
*   **URL:** `/categorias/:id`
    *   **Headers:**
        *  `Content-Type: application/json`
        *  `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
 {
  "nome": "Nome da categoria"
 }
```
*   **Resposta (200 OK):**
```json
 {
     "message": "Categoria atualizada com sucesso",
     "categoria": {
        "_id": "6516d394953c537f59f9440e",
        "nome": "Nome da categoria",
        "usuarioId": "6516d394953c537f59f9440e",
        "__v": 0
     }
  }
```
#### Deletar Categoria
*   **Método:** `DELETE`
*   **URL:** `/categorias/:id`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
{
  "message": "Categoria deletada com sucesso"
}
```
### Relatórios

#### Gerar Relatório
*   **Método:** `GET`
*   **URL:** `/relatorios`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
    *   **Parâmetros da Query String (Opcional)**
        *   `periodoInicial`: A data inicial para o relatório (ex: `2023-01-01`).
        *   `periodoFinal`: A data final para o relatório (ex: `2023-01-31`).
*   **Resposta (200 OK):**
```json
    {
        "saldo": 1000,
         "totalReceitas": 1500,
        "totalDespesas": 500,
        "receitas": [
             {
                "_id": "6514f296700ff64f9e298c57",
                "tipo": "receita",
                "valor": 1500,
                "data": "2023-09-28T00:00:00.000Z",
                "categoria": "Salário",
                "descricao": "Pagamento Mensal",
                "usuarioId": "6514ef5f700ff64f9e298c48",
                "__v": 0
             }
         ],
        "despesas":[
             {
                "_id": "6514f2b2700ff64f9e298c5b",
                 "tipo": "despesa",
                 "valor": 500,
                 "data": "2023-09-28T00:00:00.000Z",
                 "categoria": "Alimentação",
                 "descricao": "Supermercado",
                 "usuarioId": "6514ef5f700ff64f9e298c48",
                "__v": 0
            }
        ]
    }
```
### Orçamentos

#### Criar Orçamento
*   **Método:** `POST`
*   **URL:** `/orcamentos`
    *   **Headers:**
        *  `Content-Type: application/json`
        * `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
{
    "valor": 1000,
    "categoria": "Categoria",
    "periodoInicial": "2023-01-01",
    "periodoFinal": "2023-01-31"
}
```
*   **Resposta (201 Created):**
```json
 {
    "message": "Orçamento criado com sucesso",
    "orcamento": {
        "_id": "6514f2b2700ff64f9e298c5b",
        "valor": 1000,
        "categoria": "Categoria",
         "periodoInicial": "2023-01-01T00:00:00.000Z",
        "periodoFinal": "2023-01-31T00:00:00.000Z",
        "usuarioId": "6516d394953c537f59f9440e",
       "__v": 0
     }
 }
```
#### Listar Orçamentos
*   **Método:** `GET`
*   **URL:** `/orcamentos`
    *   **Headers:**
        *  `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
  [
     {
       "_id": "6514f2b2700ff64f9e298c5b",
        "valor": 1000,
        "categoria": "Categoria",
         "periodoInicial": "2023-01-01T00:00:00.000Z",
         "periodoFinal": "2023-01-31T00:00:00.000Z",
       "usuarioId": "6516d394953c537f59f9440e",
        "__v": 0
      },
      ...
   ]
```
#### Obter Orçamento por ID
*   **Método:** `GET`
*   **URL:** `/orcamentos/:id`
    *  **Headers:**
        *   `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
   {
        "_id": "6514f2b2700ff64f9e298c5b",
        "valor": 1000,
        "categoria": "Categoria",
         "periodoInicial": "2023-01-01T00:00:00.000Z",
        "periodoFinal": "2023-01-31T00:00:00.000Z",
       "usuarioId": "6516d394953c537f59f9440e",
        "__v": 0
    }
```
#### Atualizar Orçamento
*   **Método:** `PUT`
*   **URL:** `/orcamentos/:id`
    *   **Headers:**
        *  `Content-Type: application/json`
        *   `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
  {
      "valor": 1000,
      "categoria": "Categoria",
      "periodoInicial": "2023-01-01",
      "periodoFinal": "2023-01-31"
  }
```
*   **Resposta (200 OK):**
```json
 {
   "message": "Orçamento atualizado com sucesso",
   "orcamento": {
      "_id": "6514f2b2700ff64f9e298c5b",
      "valor": 1000,
      "categoria": "Categoria",
       "periodoInicial": "2023-01-01T00:00:00.000Z",
      "periodoFinal": "2023-01-31T00:00:00.000Z",
       "usuarioId": "6516d394953c537f59f9440e",
      "__v": 0
    }
  }
```
#### Deletar Orçamento
*   **Método:** `DELETE`
*   **URL:** `/orcamentos/:id`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
{
  "message": "Orçamento deletado com sucesso"
}
```
### Metas

#### Criar Meta
*   **Método:** `POST`
*   **URL:** `/metas`
    *   **Headers:**
        *  `Content-Type: application/json`
        * `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
 {
   "descricao": "Nome da meta",
    "valor": 1000,
    "dataLimite": "2024-12-31"
 }
```
*   **Resposta (201 Created):**
```json
{
    "message": "Meta criada com sucesso",
    "meta": {
     "_id": "6516d394953c537f59f9440e",
      "descricao": "Nome da meta",
      "valor": 1000,
      "dataLimite": "2024-12-31T00:00:00.000Z",
      "usuarioId": "6516d394953c537f59f9440e",
     "concluida": false,
      "__v": 0
     }
 }
```
#### Listar Metas
*   **Método:** `GET`
*   **URL:** `/metas`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
  [
     {
      "_id": "6516d394953c537f59f9440e",
        "descricao": "Nome da meta",
        "valor": 1000,
         "dataLimite": "2024-12-31T00:00:00.000Z",
         "usuarioId": "6516d394953c537f59f9440e",
         "concluida": false,
         "__v": 0
    },
     ...
   ]
```
#### Obter Meta por ID
*   **Método:** `GET`
*   **URL:** `/metas/:id`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
 {
    "_id": "6516d394953c537f59f9440e",
    "descricao": "Nome da meta",
    "valor": 1000,
     "dataLimite": "2024-12-31T00:00:00.000Z",
     "usuarioId": "6516d394953c537f59f9440e",
     "concluida": false,
     "__v": 0
  }
```
#### Atualizar Meta
*   **Método:** `PUT`
*   **URL:** `/metas/:id`
    *   **Headers:**
        * `Content-Type: application/json`
        * `Authorization: Bearer SEU_TOKEN`
*   **Corpo da Requisição:**
```json
{
  "descricao": "Nome da meta",
    "valor": 1000,
    "dataLimite": "2024-12-31"
 }
```
*   **Resposta (200 OK):**
```json
 {
   "message": "Meta atualizada com sucesso",
   "meta": {
      "_id": "6516d394953c537f59f9440e",
        "descricao": "Nome da meta",
        "valor": 1000,
        "dataLimite": "2024-12-31T00:00:00.000Z",
        "usuarioId": "6516d394953c537f59f9440e",
        "concluida": false,
         "__v": 0
     }
 }
```
#### Deletar Meta
*   **Método:** `DELETE`
*   **URL:** `/metas/:id`
    *   **Headers:**
        * `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
{
  "message": "Meta deletada com sucesso"
}
```
#### Marcar Meta como Concluida
*   **Método:** `PATCH`
*   **URL:** `/metas/:id/concluida`
    *   **Headers:**
         *  `Authorization: Bearer SEU_TOKEN`
*   **Resposta (200 OK):**
```json
 {
   "message": "Meta marcada como concluída",
   "meta": {
    "_id": "6516d394953c537f59f9440e",
     "descricao": "Nome da meta",
     "valor": 1000,
     "dataLimite": "2024-12-31T00:00:00.000Z",
      "usuarioId": "6516d394953c537f59f9440e",
      "concluida": true,
       "__v": 0
     }
  }
```
```

