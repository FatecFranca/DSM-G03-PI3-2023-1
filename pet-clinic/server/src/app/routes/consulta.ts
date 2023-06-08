import consultaController from "../controller/consultaController";
import { Router } from "express";

const router = Router();

router
  .route("/consulta")
  .post((req, res) => consultaController.create(req, res));

export default router;
