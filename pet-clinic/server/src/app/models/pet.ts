import mongoose, { Schema } from "mongoose";

export const petSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
    especie: {
      type: String,
      required: true,
    },
    raca: {
      type: String,
      required: true,
    },
    peso: {
      type: Number,
      required: false,
    },
    cliente_id: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Pet = mongoose.model("Pet", petSchema);
