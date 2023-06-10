import consultaController from "../controller/consultaController";
import { Router } from "express";

const router = Router();

router
  .route("/consulta")
  .post((req, res) => consultaController.create(req, res));

router
  .route("/consulta/cliente")
  .get((req, res) => consultaController.getCliente(req, res));

export default router;
