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
    celular: {
      type: String,
      required: true,
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
    crmv: {
      type: String,
      required: true,
      unique: true,
    },
    jornada: {
      domingo: {
        isActive: {
          type: Boolean,
          default: false,
        },
        horaInicio: {
          type: String,
        },
        horaFim: {
          type: String,
        },
      },
      segunda: {
        isActive: {
          type: Boolean,
          default: false,
        },
        horaInicio: {
          type: String,
        },
        horaFim: {
          type: String,
        },
      },
      terca: {
        isActive: {
          type: Boolean,
          default: false,
        },
        horaInicio: {
          type: String,
        },
        horaFim: {
          type: String,
        },
      },
      quarta: {
        isActive: {
          type: Boolean,
          default: false,
        },
        horaInicio: {
          type: String,
        },
        horaFim: {
          type: String,
        },
      },
      quinta: {
        isActive: {
          type: Boolean,
          default: false,
        },
        horaInicio: {
          type: String,
        },
        horaFim: {
          type: String,
        },
      },
      sexta: {
        isActive: {
          type: Boolean,
          default: false,
        },
        horaInicio: {
          type: String,
        },
        horaFim: {
          type: String,
        },
      },
      sabado: {
        isActive: {
          type: Boolean,
          default: false,
        },
        horaInicio: {
          type: String,
        },
        horaFim: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

export const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
