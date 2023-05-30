import { Request, Response } from "express";
import { Admin as adminModel } from "../models/admin";
import { Cliente as clienteModel } from "../models/cliente";
import { Veterinario as vetModel } from "../models/veterinario";
import bcrypt from "bcrypt";
import { newToken, validateToken } from "./token";

export const adminController = {
  create: async (req: Request, res: Response) => {
    try {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(req.body.senha, salt);

      const admin = {
        nome: req.body.nome,
        email: req.body.email,
        senha: passwordHash,
      };

      const response = await adminModel.create(admin);

      return res
        .status(200)
        .json({ response, msg: "admin Cadastrado com Sucesso" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  login: async (req: Request, res: Response) => {
    const adminLogin = {
      email: req.body.email,
      senha: req.body.senha,
    };

    try {
      const response = await adminModel.findOne({
        email: adminLogin.email,
      });

      if (response != null) {
        const checkSenha = await bcrypt.compare(
          adminLogin.senha,
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

    const id = await validateToken(token, "admin");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }
    try {
      if (id) {
        const response = await adminModel.findOne({ _id: id }, "-senha");
        return res.status(200).json({ response });
      } else {
        return res.status(400).json({ error: "token invalido" });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  getUsers: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "admin");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    try {
      const users = await clienteModel.find({}, "-senha");
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  getVets: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "admin");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    try {
      const users = await vetModel.find({}, "-senha");
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
};
