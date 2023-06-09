import { Router } from "express";
import { clienteController } from "../controller/clienteController/index";

const router = Router();

router
  .route("/cliente")
  .post((req, res) => clienteController.create(req, res))
  .get((req, res) => clienteController.get(req, res));

router
  .route("/cliente/vet")
  .get((req, res) => clienteController.getVet(req, res));

router
  .route("/cliente/vet/horario")
  .get((req, res) => clienteController.getVetHorario(req, res));

router
  .route("/cliente/login")
  .post((req, res) => clienteController.login(req, res));

export default router;
