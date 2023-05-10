import { Request, Response } from "express";
import { Pet as petModel } from "../models/pet";
import { validateToken } from "./token";

export const petController = {
  create: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = validateToken(token);
    console.log(id);
    try {
      const pet = {
        nome: req.body.nome,
        idade: req.body.idade,
        especie: req.body.especie,
        raca: req.body.raca,
        cliente_id: id,
      };

      const response = await petModel.create(pet);

      return res
        .status(200)
        .json({ response, msg: "Pet Cadastrado com Sucesso" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
