import { Router } from "express";
import { clienteController } from "../controller/clienteController";

const router = Router();

router.route("/cliente").post((req, res) => clienteController.create(req, res));

router
  .route("/cliente/login")
  .get((req, res) => clienteController.getOne(req, res));

export default router;
