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

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

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
  get: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = validateToken(token);

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    try {
      const response = await petModel.find({ cliente_id: id });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  put: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = validateToken(token);

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const petId = req.params.petId;

    const updatePet = {
      nome: req.body.nome,
      idade: req.body.idade,
      especie: req.body.especie,
      raca: req.body.raca,
    };

    if (
      updatePet.nome == undefined &&
      updatePet.especie == undefined &&
      updatePet.raca == undefined &&
      updatePet.idade == undefined
    ) {
      return res.status(400).json({ error: "Alteração invalida!!!" });
    }

    try {
      await petModel.findOneAndUpdate(
        {
          cliente_id: id,
          _id: petId,
        },
        { ...updatePet }
      );
      return res.status(200).json({ msg: "Update realizado com sucesso" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  delete: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = validateToken(token);

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const petId = req.params.petId;
  },
};
