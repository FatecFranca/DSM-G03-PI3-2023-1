import { Router } from "express";
import { vetController } from "../controller/veterinario";

const router = Router();

router
  .route("/vet")
  .post((req, res) => vetController.create(req, res));

router
  .route("/vet/login")
  .post((req, res) => vetController.login(req, res));

export default router;
