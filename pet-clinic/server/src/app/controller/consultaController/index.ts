import { Request, Response } from "express";
import { consulta as consultaModel } from "../../models/consulta";
import { validateToken } from "../token";

export const consultaController = {
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
      const consulta = {
        pet_id: req.body.pet_id,
        vet_id: req.body.vet_id,
        motivo: req.body.motivo,
        date_time: req.body.date_time,
      };

      const response = await consultaModel.create(consulta);

      return res
        .status(200)
        .json({ response, msg: "Consulta Cadastrada com Sucesso" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
