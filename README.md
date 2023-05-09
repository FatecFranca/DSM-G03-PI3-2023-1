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
