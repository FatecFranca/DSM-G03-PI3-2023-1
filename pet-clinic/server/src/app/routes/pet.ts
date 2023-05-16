import { Router } from "express";
import { petController } from "../controller/petController";

const router = Router();

router
  .route("/pet")
  .post((req, res) => petController.create(req, res))
  .get((req, res) => petController.get(req, res));

router
  .route("/pet/:petId")
  .put((req, res) => petController.put(req, res))
  .delete((req, res) => petController.delete(req, res));

export default router;
