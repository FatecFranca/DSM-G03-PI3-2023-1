import mongoose, { ObjectExpression, Schema } from "mongoose";

export const consultaSchema = new Schema(
  {
    pet_id: {
      type: String,
      required: true,
    },
    vet_id: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    date_time: {
      type: String,
      required: true,
    },
    exames: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

export const consulta = mongoose.model("Consulta", consultaSchema);
