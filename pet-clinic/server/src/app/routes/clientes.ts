import { Router } from "express";
import { clienteController } from "../controller/clienteController";

const router = Router();

router.route("/cliente").post((req, res) => clienteController.create(req, res));

export default router;
