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
    cliente_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Pet = mongoose.model("Pet", petSchema);
