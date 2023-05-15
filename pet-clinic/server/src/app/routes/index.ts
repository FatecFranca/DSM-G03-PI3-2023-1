import { Router } from "express";
import clienteRouter from "./clientes";
import petRouter from "./pet";

const router = Router();

router.use("/", clienteRouter);
router.use("/", petRouter);

export default router;
