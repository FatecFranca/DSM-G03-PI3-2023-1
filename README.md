# Instruções para utilizar o repositório DSM-G03-PI3-2023-1

## Pré-requisitos

Antes de utilizar este repositório, é necessário ter instalado na sua máquina:

- Node.js (versão 14 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Instalação

1. Abra o terminal e navegue até a pasta do repositório clonado utilizando o comando `cd`:

```
cd DSM-G03-PI3-2023-1\pet-clinic\server
```

2. Instale as dependências do projeto utilizando o NPM:

```
npm i
```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias para a execução da aplicação.

## Execução

Para iniciar a aplicação, execute o seguinte comando:

```
npm start
```

Isso iniciará o servidor e a aplicação estará disponível para uso.

## Documentação da API

### Cadastro de Cliente

Endpoint para cadastrar um cliente na aplicação.

- **URL**

  `/cliente`

- **Método HTTP**

  `POST`

- **Body**

  ```
  {
    "nome": "teste1",
    "email": "teste1@teste.com",
    "senha": "123",
    "cpf": "12345678932",
    "endereco": {
      "rua": "rua teste",
      "numero": "69",
      "bairro": "centro",
      "cidade": "Franca",
      "estado": "SP",
      "cep": "24251-251"
     }
  }
  ```

- **Resposta de Sucesso**

- **Código:** 200 OK
- **Conteúdo:**
  ```
  {
      "response": {
          "endereco": {
              "rua": "rua teste",
              "numero": "69",
              "bairro": "centro",
              "cidade": "Franca",
              "estado": "SP",
              "cep": "24251-251"
          },
          "_id": "6458d198f7a60218f52e97fd",
          "nome": "teste1",
          "email": "teste1@teste.com",
          "cpf": "12345678932",
          "createdAt": "2023-05-08T10:40:24.673Z",
          "updatedAt": "2023-05-08T10:40:24.673Z",
          "__v": 0
      }
  }
  ```

### Login

Endpoint para realizar o login na aplicação.

- **URL**

`/cliente/login`

- **Método HTTP**

`GET`

- **Body**

```
  {
    "email": "teste1@teste.com",
    "senha": "123"
  }
```

- **Resposta de Sucesso**

- **Código:** 200 OK
- **Conteúdo:**
  ```
  {
      "token": "<token gerado>"
  }
  ```

### Validação de Token

Endpoint para validar o token de um cliente.

- **URL**

`/cliente`

- **Método HTTP**

`GET`

- **Header**

```
  Authorization: Bearer <token gerado>
```

- **Resposta de Sucesso**

- **Código:** 200 OK
- **Conteúdo:**
  ```
  {
      "response": {
          "endereco": {
              "rua": "rua teste",
              "numero": "69",
              "bairro": "centro",
              "cidade": "Franca",
              "estado": "SP",
              "cep": "24251-251"
          },
          "_id": "6458d198f7a60218f52e97fd",
          "nome": "teste1",
          "email": "teste1@teste.com",
          "cpf": "12345678932",
          "createdAt": "2023-05-08T10:40:24.673Z",
          "updatedAt": "2023-05-08T10:40:24.673Z",
          "__v": 0
      }
  }
  ```

## Pet

### Criar Pet

**URL:** `/pet`

**Método HTTP:** `POST`

**Parâmetros de Requisição:**

| Parâmetro | Tipo     | Descrição      |
| --------- | -------- | -------------- |
| `nome`    | `string` | Nome do pet    |
| `idade`   | `number` | Idade do pet   |
| `especie` | `string` | Espécie do pet |
| `raca`    | `string` | Raça do pet    |

**Cabeçalhos de Requisição:**

| Cabeçalho       | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `Authorization` | `string` | `Bearer` Token de autenticação do cliente |

**Corpo da Requisição:**

```json
{
  "nome": "Rex",
  "idade": 3,
  "especie": "Cachorro",
  "raca": "Labrador"
}
```

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  {
    "response": {
      "_id": "6156f1a6ebf08e2029ac6f61",
      "nome": "Rex",
      "idade": 3,
      "especie": "Cachorro",
      "raca": "Labrador",
      "cliente_id": "6156e14f7d59c3449063f7b5",
      "createdAt": "2021-10-01T16:19:02.236Z",
      "updatedAt": "2021-10-01T16:19:02.236Z",
      "__v": 0
    },
    "msg": "Pet Cadastrado com Sucesso"
  }
  ```

- **Status:** 400 Bad Request

  **Corpo:**

  ```json
  {
    "error": "acesso negado!"
  }
  ```

- **Status:** 400 Bad Request

  **Corpo:**

  ```json
  {
    "error": "mensagem de erro"
  }
  ```

### Obter Pets

**URL:** `/pet`

**Método HTTP:** `GET`

**Cabeçalhos de Requisição:**

| Cabeçalho       | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `Authorization` | `string` | `Bearer` Token de autenticação do cliente |

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  [
    {
      "_id": "6156f1a6ebf08e2029ac6f61",
      "nome": "Rex",
      "idade": 3,
      "especie": "Cachorro",
      "raca": "Labrador",
      "cliente_id": "6156e14f7d59c3449063f7b5",
      "createdAt": "2021-10-01T16:19:02.236Z",
      "updatedAt": "2021-10-01T16:19:02.236Z",
      "__v": 0
    },
    {
      "_id": "6156f1a6ebf08e2029ac6f62",
      "nome": "Mia",
      "idade": 2,
      "especie": "Gato",
      "raca": "Siames",
      "cliente_id": "6156e14f7d59c3449063f7b5",
      "createdAt": "2021-10-02T10:24:15.456Z",
      "updatedAt": "2021-10-02T10:24:15.456Z",
      "__v": 0
    }
  ]
  ```

- **Status:** 400 Bad Request

  **Corpo:**

  ```json
  {
    "error": "acesso negado!"
  }
  ```

### Atualizar Pet

**URL:** `/pet/:petId`

**Método HTTP:** `PUT`

**Parâmetros de Requisição:**

| Parâmetro | Tipo     | Descrição                  |
| --------- | -------- | -------------------------- |
| `petId`   | `string` | ID do pet a ser atualizado |

**Cabeçalhos de Requisição:**

| Cabeçalho       | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `Authorization` | `string` | `Bearer` Token de autenticação do cliente |

**Corpo da Requisição:**

```json
{
  "nome": "Novo nome",
  "idade": 4,
  "especie": "Gato",
  "raca": "Persa"
}
```

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  {
    "msg": "Update realizado com sucesso"
  }
  ```

- **Status:** 400 Bad Request

  **Corpo:**

  ```json
  {
    "error": "acesso negado!"
  }
  ```

- **Status:** 400 Bad Request

  **Corpo:**

  ```json
  {
    "error": "mensagem de erro"
  }
  ```

## Deletar um Pet

`DELETE /pet/:petId`

Deleta um pet cadastrado pelo cliente autenticado. É necessário enviar o token de autenticação no cabeçalho da requisição.

### Parâmetros da Requisição

- `petId` - **obrigatório**: o ID do pet a ser deletado.

### Cabeçalhos da Requisição

- `Authorization` - **obrigatório**: token de autenticação do usuário.

### Exemplo de Requisição

```

DELETE /pet/60a5b13cb77b1d1884f1d9e5 HTTP/1.1
Host: localhost:3000
Authorization: Bearer <seu_token_de_autenticação>

```

### Resposta de Sucesso

**Código:** 200 OK

**Conteúdo:**

```

{
"msg": "Pet deletado!!"
}

```

### Respostas de Erro

- **Código:** 400 Bad Request<br>
  **Conteúdo:** `{ "error": "acesso negado!" }`

- **Código:** 404 Not Found<br>
  **Conteúdo:** `{ "error": "Pet não encontrado!" }`

- **Código:** 500 Internal Server Error<br>
  **Conteúdo:** `{ "error": "Mensagem de erro" }`
  
  ## VETERINÁRIO

### Cadastrar

**URL:** `/vet`

**Método HTTP:** `POST`

**Parâmetros de Requisição:**

| Parâmetro | Tipo     | 
| --------- | -------- | 
| `nome`    | `string` | 
| `cpf`     | `string` |
| `crmv`    | `string` | 
| `email`   | `string` | 
| `senha`   | `string` | 
| `celular` | `string` | 

**Corpo da Requisição:**

```json
{
  "nome": "jorge",
  "email": "teste234@teste.com",
  "senha": "12sssss3",
  "cpf": "059.834.030-01",
  "celular": "12345678912",
	"crmv": "1234B"
}
```

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  {
    "response": {
      "_id": "6156f1a6ebf08e2029ac6f61",
       "nome": "jorge",
       "email": "teste234@teste.com",
       "senha": "12sssss3",
       "cpf": "059.834.030-01",
       "celular": "12345678912",
	     "crmv": "1234B"
      "createdAt": "2021-10-01T16:19:02.236Z",
      "updatedAt": "2021-10-01T16:19:02.236Z",
      "__v": 0
    },
    "msg": "Veterinario Cadastrado com Sucesso"
  }
  ```

- **Status:** 400 Bad Request

  **Corpo:**

  ```json
  {
    "error": "acesso negado!"
  }
  ```

- **Status:** 400 Bad Request

  **Corpo:**

  ```json
  {
    "error": "mensagem de erro"
  }
  ```
