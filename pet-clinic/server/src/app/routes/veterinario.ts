import { Router } from "express";
import { vetController } from "../controller/veterinario";

const router = Router();

router.route("/vet").post((req, res) => vetController.create(req, res));

export default router;
