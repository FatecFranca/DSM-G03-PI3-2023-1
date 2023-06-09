import mongoose, { Schema } from "mongoose";

export const clienteSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
      unique: true,
    },
    endereco: {
      rua: {
        type: String,
        required: true,
      },
      numero: {
        type: String,
        required: true,
      },
      complemento: {
        type: String,
        required: false,
      },
      bairro: {
        type: String,
        required: true,
      },
      cidade: {
        type: String,
        required: true,
      },
      estado: {
        type: String,
        required: true,
      },
      cep: {
        type: String,
        required: false,
      },
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Cliente = mongoose.model("Cliente", clienteSchema);
