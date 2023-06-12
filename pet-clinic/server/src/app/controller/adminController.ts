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
        status: { $ne: false },
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
        const response = await adminModel.findOne(
          { _id: id, status: { $ne: false } },
          "-senha"
        );
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
      const users = await clienteModel.find(
        { status: { $ne: false } },
        "-senha"
      );
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
      const users = await vetModel.find({ status: { $ne: false } }, "-senha");
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  putUser: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "admin");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const putUser = {
      _id: req.body._id,
      campo: req.body.campo,
      valor: req.body.valor,
    };

    try {
      await clienteModel.findByIdAndUpdate(putUser._id, {
        [putUser.campo]: putUser.valor,
      });
      return res.status(201).json({ msg: "cliente atualizado com sucesso!!" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  putVet: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "admin");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const putVet = {
      _id: req.body._id,
      campo: req.body.campo,
      valor: req.body.valor,
    };

    try {
      await vetModel.findByIdAndUpdate(putVet._id, {
        [putVet.campo]: putVet.valor,
      });
      return res
        .status(201)
        .json({ msg: "veterinario atualizado com sucesso!!" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  deleteVet: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "admin");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const vet_id = req.body.vet_id;

    try {
      await vetModel.findByIdAndUpdate(vet_id, { status: false });

      return res.status(200).json({ msg: "veterinario deletado!!" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  
  deleteCliente: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "admin");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const cliente_id = req.body.cliente_id;

    try {
      await clienteModel.findByIdAndUpdate(cliente_id, { status: false });

      return res.status(200).json({ msg: "cliente deletado!!" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
};
