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

    const id = await validateToken(token, "cliente");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    try {
      const pet = {
        nome: req.body.nome,
        idade: req.body.idade,
        especie: req.body.especie,
        raca: req.body.raca,
        sexo: req.body.sexo,
        cliente_id: id,
        peso: req.body.peso || null,
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

    const id = await validateToken(token, "cliente");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    try {
      const response = await petModel.find({
        cliente_id: id,
        status: { $ne: false },
      });
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

    const id = await validateToken(token, "cliente");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const petId = req.params.petId;

    const updatePet = {
      nome: req.body.nome,
      idade: req.body.idade,
      especie: req.body.especie,
      raca: req.body.raca,
      peso: req.body.peso || null,
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
          status: { $ne: false },
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

    const id = await validateToken(token, "cliente");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const petId = req.params.petId;

    try {
      await petModel.findOneAndUpdate(
        { _id: petId, cliente_id: id },
        { status: false }
      );

      return res.status(200).json({ msg: "Pet deletado!!" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  getByID: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "vet");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const pet_id = req.params.petId;

    try {
      const response = await petModel.find({
        _id: pet_id,
        status: { $ne: false },
      });

      if (!response) {
        return res.status(404).json("Pet não encontrado");
      }
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
