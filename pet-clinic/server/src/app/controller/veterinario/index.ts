import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { validateToken } from "../token";
import { Veterinario as vetModel } from "../../models/veterinario";
import singInValid from "./singInValid";

export const vetController = {
  create: async (req: Request, res: Response) => {
    try {
      if (req.body != null) {
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(req.body.senha, salt);

        const veterinario = {
          nome: req.body.nome,
          email: req.body.email,
          senha: passwordHash,
          cpf: req.body.cpf,
          crmv: req.body.crmv,
          celular: req.body.celular,
        };

        const veterinarioValid = singInValid(veterinario);

        if (!veterinarioValid.valid) {
          return res.status(400).json(veterinarioValid.data);
        }

        const response = await vetModel.create(veterinarioValid.data);

        return res
          .status(201)
          .json({ response, msg: "Veterinario Cadastrado com sucesso!" });
      }
    } catch (error: any) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ error: "Este email, CPF ou CRMV já está em uso." });
      }
    }
  },
};
