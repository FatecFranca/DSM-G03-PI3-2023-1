// Importação do model
const Cliente = require('../models/Cliente')

const controller = {}   // Objeto vazio

controller.create = async (req, res) => {
  try {
    // Manda as informações que vieram em req.body
    // para serem gravadas no banco de dados
    await Cliente.create(req.body)

    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.retrieveAll = async (req, res) => {
  try {
    // Retorna todos os documentos da coleção
    const result = await Cliente.find()
      .populate('cliente')
      .populate('pets.product')

    // HTTP 200: OK (implícito)
    res.send(result)
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.retrieveOne = async(req, res) => {
  try {
    const result = await Cliente.findById(req.params.id)
      .populate('customer')
      .populate('pets.product')

    if(result) {
      // Encontrou o documento ~> HTTP 200: OK (implícito)
      res.send(result)
    }
    else {
      // Não encontrou o documento ~> HTTP 404: Not found
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.update = async (req, res) => {
  try {

    // Encontra a venda para ser atualizada
    const cliente = await Cliente.findById(req.params.id)
    
    // pets foi passado em req.body
    if(req.body.pets) {
      // Percorre cada pet de req.body, verificando se já existe
      // ou não em sales.pet
      for(let pet of req.body.pets) {
        // Se o pet tem _id, é porque já existe ~> É CASO DE ATUALIZAÇÃO
        if(pet._id) {

          // Verifica se foi passada uma propriedade especial, chamada
          // '$_delete', com o valor true e, nesse caso, deleta o subdocumento
          if(pet['$_delete'] === true) {
            cliente.pets.id(pet._id).deleteOne()
          }
          else {
            // Procura cada propriedade no pet de req.body e atualiza no documento
            for(let prop in pet) {
              cliente.pets.id(pet._id)[prop] = pet[prop]
            }
          }
        }
        // Item não existe ~> É caso de inserção
        else {
          cliente.pets.push(pet)   // Cria um novo pet
        }
      }

      // Indica que o pets foi modificado e deve ser regravado
      cliente.markModified('pets')

    }

    // Verifica as demais propriedades do pai (cliente) por alterações
    for(let prop in req.body) {
      if(prop !== 'pets') {  // Items já foi processado acima
        console.log({prop})
        cliente[prop] = req.body[prop]
        cliente.markModified(prop)
      }
    }
    
    const result = await cliente.save()

    if(result) {
      // Encontrou e atualizou ~> HTTP 204: No content
      res.status(204).end()
    }
    else {
      // Não encontrou para atualizar ~> HTTP 404: Not found
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.delete = async (req, res) => {
  try {
    const result = await Cliente.findByIdAndDelete(req.params.id)

    if(result) {
      // Encontrou e excluiu ~> HTTP 204: No content
      res.status(204).end()
    }
    else {
      // Não encontrou para excluir ~> HTTP 404: Not found
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

module.exports = controller