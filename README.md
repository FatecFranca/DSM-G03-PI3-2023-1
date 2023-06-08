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

  ### Get Veterinarios na tela de cliente

  **URL:** `/cliente/vet`

**Método HTTP:** `get`

**Cabeçalhos de Requisição:**

| Cabeçalho       | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `Authorization` | `string` | `Bearer` Token de autenticação do cliente |

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  {
    "vets": [
      {
        "_id": "646e7dc637747008ff8e457a",
        "nome": "jorge"
      },
      {
        "_id": "646e7f3f386cf861ce0ab919",
        "nome": "jorge"
      },
      {
        "_id": "646f893b6bff448a0aba0930",
        "nome": "Higor"
      }
    ]
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

  ### Get Horarios de Veterinarios disponiveis na tela de cliente

  **URL:** `/cliente/vet/horario`

**Método HTTP:** `GET`

**Parâmetros de Requisição:**

| Parâmetro | Tipo     | Descrição       |
| --------- | -------- | --------------- |
| `vet_id`  | `string` | Id do Vet       |
| `data`    | `string` | data DD/MM/AAAA |

**Cabeçalhos de Requisição:**

| Cabeçalho       | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `Authorization` | `string` | `Bearer` Token de autenticação do cliente |

**Corpo da Requisição:**

```json
{
  "vet_id": "64793a37df02097afcd0cd50",
  "date": "08/06/2023"
}
```

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  {
    "horarioLivre": [
      "08:15",
      "08:45",
      "09:15",
      "09:45",
      "10:15",
      "10:45",
      "11:15",
      "11:45",
      "12:15",
      "12:45",
      "13:15",
      "13:45",
      "14:15",
      "14:45",
      "15:15",
      "15:45",
      "16:15",
      "16:45",
      "17:15",
      "17:45",
      "18:15"
    ]
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

  Claro! Aqui está a documentação da API para a parte de cadastro de veterinário em formato .mkd (Markdown):

**Cadastro de Veterinário**

- **URL**

  `/vet`

- **Método**

  `POST`

- **Corpo da Requisição (JSON)**

  | Parâmetro | Tipo   | Obrigatório | Descrição                                                       |
  | --------- | ------ | ----------- | --------------------------------------------------------------- |
  | nome      | string | Sim         | Nome completo do veterinário                                    |
  | email     | string | Sim         | Endereço de e-mail do veterinário                               |
  | senha     | string | Sim         | Senha do veterinário                                            |
  | cpf       | string | Sim         | CPF do veterinário                                              |
  | crmv      | string | Sim         | CRMV (Conselho Regional de Medicina Veterinária) do veterinário |
  | celular   | string | Sim         | Número de celular do veterinário                                |
  | jornada   | object | Sim         | Jornada de trabalho do veterinário                              |

  - A propriedade `jornada` é um objeto que contém os horários de trabalho do veterinário para cada dia da semana. Cada dia da semana é uma chave no objeto, com os seguintes subcampos:

    - `isActive` (booleano): Indica se o veterinário está disponível para trabalhar no dia.
    - `horaInicio` (string): Horário de início do expediente do veterinário no dia.
    - `horaFim` (string): Horário de término do expediente do veterinário no dia.

- **Resposta de Sucesso**

  - **Código:** 201 CREATED<br />
    **Conteúdo:** `{ "msg": "Veterinario Cadastrado com sucesso!" }`

- **Respostas de Erro**

  - **Código:** 400 BAD REQUEST<br />
    **Conteúdo:** `{ "error": "Este email, CPF ou CRMV já está em uso." }`

- **Exemplo de Requisição:**

  ```json
  POST /veterinarios HTTP/1.1
  Content-Type: application/json

  {
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "senha": "senha123",
    "cpf": "123.456.789-00",
    "crmv": "98765",
    "celular": "(11) 98765-4321",
    "jornada": {
      "domingo": {
        "isActive": true,
        "horaInicio": "09:00",
        "horaFim": "18:00"
      },
      "segunda": {
        "isActive": true,
        "horaInicio": "08:00",
        "horaFim": "17:00"
      },
      "terca": {
        "isActive": true,
        "horaInicio": "08:30",
        "horaFim": "17:30"
      },
      "quarta": {
        "isActive": true,
        "horaInicio": "08:00",
        "horaFim": "16:30"
      },
      "quinta": {
        "isActive": true,
        "horaInicio": "09:00",
        "horaFim": "18:00"
      },
      "sexta": {
        "isActive": false
      },
      "sabado": {
        "isActive": false
      }
    }
  }

````

* **Exemplo de Resposta de Sucesso:**

```json
HTTP/1.1 201 Created
Content-Type: application/json

{
  "msg": "Veterinario Cadastrado com sucesso!"
}
````

- **Exemplo de Resposta de Erro (Email, CPF ou CRMV já em uso):**

  ```json
  HTTP/1.1 400 Bad Request
  Content-Type: application/json

  {
    "error": "Este email, CPF ou CRMV já está em uso."
  }
  ```

## **Login de Veterinário**

Autentica um veterinário no sistema.

- **URL**

  `/vet/login`

- **Método**

  `POST`

- **Corpo da Requisição (JSON)**

  | Parâmetro | Tipo   | Obrigatório | Descrição                         |
  | --------- | ------ | ----------- | --------------------------------- |
  | email     | string | Sim         | Endereço de e-mail do veterinário |
  | senha     | string | Sim         | Senha do veterinário              |

- **Resposta de Sucesso**

  - **Código:** 200 OK<br />
    **Conteúdo:** `{ "token": "JWT_TOKEN" }`

- **Respostas de Erro**

  - **Código:** 403 Forbidden<br />
    **Conteúdo:** `{ "error": "Senha incorreta." }`

  - **Código:** 403 Forbidden<br />
    **Conteúdo:** `{ "error": "Email não encontrado." }`

- **Exemplo de Requisição:**

  ```json
  POST /vet/login HTTP/1.1
  Content-Type: application/json

  {
    "email": "joao.silva@example.com",
    "senha": "senha123"
  }
  ```

- **Exemplo de Resposta de Sucesso:**

  ```json
  HTTP/1.1 200 OK
  Content-Type: application/json

  {
    "token": "JWT_TOKEN"
  }
  ```

- **Exemplo de Resposta de Erro (Senha incorreta):**

  ```json
  HTTP/1.1 403 Forbidden
  Content-Type: application/json

  {
    "error": "Senha incorreta."
  }
  ```

- **Exemplo de Resposta de Erro (Email não encontrado):**

  ```json
  HTTP/1.1 403 Forbidden
  Content-Type: application/json

  {
    "error": "Email não encontrado."
  }
  ```

## **Obter Dados de um Veterinário**

Obtém os dados de um veterinário autenticado.

- **URL**

  `/vet`

- **Método**

  `GET`

- **Cabeçalho da Requisição**

  | Parâmetro     | Tipo   | Descrição                         |
  | ------------- | ------ | --------------------------------- |
  | Authorization | string | Token de autenticação (JWT_TOKEN) |

- **Resposta de Sucesso**

  - **Código:** 200 OK<br />
    **Conteúdo:** `{ "response": { dados do veterinário } }`

- **Respostas de Erro**

  - **Código:** 400 Bad Request<br />
    **Conteúdo:** `{ "error": "acesso negado!" }`

  - **Código:** 400 Bad Request<br />
    **Conteúdo:** `{ "error": "token inválido" }`

- **Exemplo de Requisição:**

  ```json
  GET /vet HTTP/1.1
  Authorization: Bearer JWT_TOKEN
  ```

- **Exemplo de Resposta de Sucesso:**

  ```json
  HTTP/1.1 200 OK
  Content-Type: application/json

  {
    "response": {
      "nome": "João da Silva",
      "email": "joao.silva@example.com",
      "cpf": "123.456.789-00",
      "crmv": "98765",


      "celular": "(11) 98765-4321",
      "jornada": {
        "domingo": {
          "isActive": true,
          "horaInicio": "09:00",
          "horaFim": "18:00"
        },
        "segunda": {
          "isActive": true,
          "horaInicio": "08:00",
          "horaFim": "17:00"
        },
        ...
      }
    }
  }
  ```

- **Exemplo de Resposta de Erro (Acesso negado):**

  ```json
  HTTP/1.1 400 Bad Request
  Content-Type: application/json

  {
    "error": "acesso negado!"
  }
  ```

- **Exemplo de Resposta de Erro (Token inválido):**

  ```json
  HTTP/1.1 400 Bad Request
  Content-Type: application/json

  {
    "error": "token inválido"
  }
  ```

### ADMIN

### Deletar Veterinario

**URL:** `/api/admin/vets`

**Método HTTP:** `DELETE`

**Parâmetros de Requisição:**

| Parâmetro | Tipo     | Descrição         |
| --------- | -------- | ----------------- |
| `vet_id`  | `string` | id do veterinario |

**Cabeçalhos de Requisição:**

| Cabeçalho       | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `Authorization` | `string` | `Bearer` Token de autenticação do cliente |

**Corpo da Requisição:**

```json
{
  "vet_id": "asfdhnousia4654"
}
```

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  {
    "msg": "veterinario deletado!!"
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

  ### Deletar CLIENTE

**URL:** `/api/admin/cliente`

**Método HTTP:** `DELETE`

**Parâmetros de Requisição:**

| Parâmetro    | Tipo     | Descrição     |
| ------------ | -------- | ------------- |
| `cliente_id` | `string` | id do cliente |

**Cabeçalhos de Requisição:**

| Cabeçalho       | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `Authorization` | `string` | `Bearer` Token de autenticação do cliente |

**Corpo da Requisição:**

```json
{
  "cliente_id": "asfdhnousia4654"
}
```

**Respostas:**

- **Status:** 200 OK

  **Corpo:**

  ```json
  {
    "msg": "cliente deletado!!"
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
