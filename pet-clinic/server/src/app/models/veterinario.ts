import mongoose, { Schema } from "mongoose";

export const veterinarioSchema = new Schema(
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
    crmvce: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
