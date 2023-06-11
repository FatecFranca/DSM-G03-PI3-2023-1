import { Request, Response } from "express";
import { consulta as consultaModel } from "../../models/consulta";
import { Pet as petModel } from "../../models/pet";
import { validateToken } from "../token";
import verificaHorario from "../validateFunctions/verificaHorarioConsulta";

export const consultaController = {
  create: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, req.body.user);

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const consulta = {
      pet_id: req.body.pet_id,
      vet_id: req.body.vet_id,
      motivo: req.body.motivo,
      date_time: req.body.date_time,
    };

    const verifica = await verificaHorario(
      consulta.vet_id || "",
      consulta.date_time || ""
    );

    if (!verifica) {
      return res.status(401).json({ error: "horario indisponivel" });
    }

    try {
      const response = await consultaModel.create(consulta);

      return res
        .status(200)
        .json({ response, msg: "Consulta Cadastrada com Sucesso" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  getCliente: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "cliente");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const pet_id = req.params.petId;

    try {
      const verify = await petModel.find({
        cliente_id: id,
        _id: pet_id,
      });

      if (verify === null) {
        return res.status(404).json({
          error: "Esse pet não pertence a esse cliente ou pet_id invalido",
        });
      }

      console.log(pet_id);

      const response = await consultaModel.find({ pet_id: pet_id });

      return res.status(200).json({ response });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  getVet: async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : "";

    if (token == "") {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const id = await validateToken(token, "cliente");

    if (id == null) {
      return res.status(400).json({ error: "acesso negado!" });
    }

    const date = req.body.date;

    function formatDate(dateString: string): string {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    try {
      const response = await consultaModel.find({ vet_id: id });

      const array = response.filter((e) => {
        const dateE = formatDate(e.date_time);

        return dateE === date ? true : false;
      });

      return res.status(200).json({ response: array });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};

export default consultaController;
