import consultaController from "../controller/consultaController";
import { Router } from "express";

const router = Router();

router
  .route("/consulta")
  .post((req, res) => consultaController.create(req, res));

router
  .route("/consulta/cliente/:petId")
  .get((req, res) => consultaController.getCliente(req, res));

router
  .route("/consulta/vet")
  .get((req, res) => consultaController.getVet(req, res));

export default router;
