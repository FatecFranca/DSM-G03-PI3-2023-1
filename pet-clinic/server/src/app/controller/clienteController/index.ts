import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { Cliente as clienteModel } from "../../models/cliente";
import { newToken, validateToken } from "../token";
import singInValid from "./singInValid";

export const clienteController = {
  create: async (req: Request, res: Response) => {
    try {
      if (req.body != null) {
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(req.body.senha, salt);

        const cliente = {
          nome: req.body.nome,
          email: req.body.email,
          senha: passwordHash,
          cpf: req.body.cpf,
          endereco: req.body.endereco,
        };

        const clienteValid = singInValid({ ...cliente, senha: req.body.senha });

        if (!clienteValid.valid) {
          return res.status(400).json(clienteValid.data);
        }

        await clienteModel.create(cliente);

        return res.status(201).json({ msg: "Cliente Cadastrado com sucesso!" });
      }
    } catch (error: any) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ error: "Este email ou CPF já está em uso." });
      }
    }
  },
  login: async (req: Request, res: Response) => {
    const clienteLogin = {
      email: req.body.email,
      senha: req.body.senha,
    };

    try {
      const response = await clienteModel.findOne({
        email: clienteLogin.email,
      });

      if (response != null) {
        const checkSenha = await bcrypt.compare(
          clienteLogin.senha,
          response.senha
        );
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
  get: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "cliente");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }
    try {
      if (id) {
        const response = await clienteModel.findOne({ _id: id }, "-senha");
        return res.status(200).json({ response });
      } else {
        return res.status(400).json({ error: "token invalido" });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
