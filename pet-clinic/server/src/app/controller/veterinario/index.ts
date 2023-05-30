import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { newToken, validateToken } from "../token";
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
          jornada: req.body.jornada,
        };

        const veterinarioValid = singInValid({
          ...veterinario,
          senha: req.body.senha,
        });

        if (!veterinarioValid.valid) {
          return res.status(400).json(veterinarioValid.data);
        }

        console.log(veterinarioValid);

        await vetModel.create(veterinario);

        return res
          .status(201)
          .json({ msg: "Veterinario Cadastrado com sucesso!" });
      }
    } catch (error: any) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ error: "Este email, CPF ou CRMV já está em uso." });
      } else {
        return res.status(400).json({ error });
      }
    }
  },
  login: async (req: Request, res: Response) => {
    const vetLogin = {
      email: req.body.email,
      senha: req.body.senha,
    };

    try {
      const response = await vetModel.findOne({
        email: vetLogin.email,
      });

      if (response != null) {
        const checkSenha = await bcrypt.compare(vetLogin.senha, response.senha);
        if (!checkSenha) {
          return res.status(403).json({ error: "Senha incorreta." });
        }
      } else {
        return res.status(403).json({ error: "Email não encontrado." });
      }

      const token = newToken(response.id);
      res.status(200).json({ token });
    } catch (error: any) {
      return res.status(400).json({ error: error });
    }
  },
  getOne: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "vet");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }
    try {
      if (id) {
        const response = await vetModel.findOne({ _id: id }, "-senha");
        return res.status(200).json({ response });
      } else {
        return res.status(400).json({ error: "token invalido" });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
