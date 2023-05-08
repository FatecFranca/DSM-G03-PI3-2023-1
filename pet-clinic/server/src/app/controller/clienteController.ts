import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { Cliente as clienteModel } from "../models/cliente";

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

        const response = await clienteModel.create(cliente);

        res
          .status(201)
          .json({ response, msg: "Cliente Cadastrado com sucesso!" });
      }
    } catch (error: any) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ error: "Este email ou CPF já está em uso." });
      }
    }
  },
  getOne: async (req: Request, res: Response) => {
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

      res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({ error: error });
    }
  },
};
