import { Router } from "express";
import { petController } from "../controller/petController";

const router = Router();

router.route("/pet").post((req, res) => petController.create(req, res));
//   .get((req, res) => petController.get(req, res));

// router
//   .route("/cliente/login")
//   .get((req, res) => petController.login(req, res));

export default router;
