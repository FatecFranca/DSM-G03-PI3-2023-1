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
    motivo: {
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
    laudo: {
      type: String,
      required: false,
    },
    receita: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const consulta = mongoose.model("Consulta", consultaSchema);
