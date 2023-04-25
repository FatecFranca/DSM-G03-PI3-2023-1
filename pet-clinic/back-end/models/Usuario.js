const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true  // Campo obigatório
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    minlength: 8, // definindo a quantidade mínima de caracteres da senha
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, // definindo uma expressão regular para validar a senha
    required: true
  },
  tipo: {
    type: String,
    enum: ['cliente', 'admin', 'veterinario','superAdmin'],
    required: true
  },
  // Subdocumento com campos exclusivos do cliente
  cliente: {
    // Apenas para clientes
    type: {
      cpf: {
        type: String,
        required: function () {
          return this.tipo === 'cliente';
        }
      }
    }
  },
  // Subdocumento com campos exclusivos do veterinário
  veterinario: {
    // Apenas para veterinários
    type: {
      crmvCe: {
        type: String,
        required: function () {
          return this.tipo === 'veterinario';
        }
      }
    }
  }
})

/*
  Parâmetros de mongoose.model:
  1º: nome da model, para uso interno (convenção: primeira letra maiúscula e singular)
  2º: relação de campos do esquema (constante schema)
  3º: nome da collection no banco de dados (convenção: mesmo nome do model, mas com
      letra minúscula e no plural)
*/
module.exports = mongoose.model('Usuario', schema, 'usuarios')