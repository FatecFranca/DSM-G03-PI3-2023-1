const mongoose = require('mongoose')

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true  // Campo obigatório
  },
  cpf: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  // Subdocumento incorporado
  endereco: {
    rua: {
      type: String,
      required: true
    },
    numero: {
      type: String,
      required: true
    },
    complemento: {
      type: String,
      required: false
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    cep: {
      type: String,
      required: false
    }
  },
  // Vetor de subdocumento incorporado
  pets: [{
    nome: {
      type: String,
      required: true
    },
    idade: {
      type: Number,
      required: true
    },
    especie: {
      type: String,
      required: true
    },
    raca: {
      type: String,
      required: true
    },
    peso: {
      type: Number,
      required: true
    },
    sexo: {
      type: String,
      required: true
    },
    cliente: {
      type: mongoose.ObjectId,  // Tipo para chave estrangeira
      ref: 'Cliente',          // Model estrangeiro
      required: true
    },
  }]
})

/*
  Parâmetros de mongoose.model:
  1º: nome da model, para uso interno (convenção: primeira letra maiúscula e singular)
  2º: relação de campos do esquema (constante schema)
  3º: nome da collection no banco de dados (convenção: mesmo nome do model, mas com
      letra minúscula e no plural)
*/
module.exports = mongoose.model('Cliente', schema, 'clientes')