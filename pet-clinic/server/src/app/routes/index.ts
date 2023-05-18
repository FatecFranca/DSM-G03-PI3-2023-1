import { Router } from "express";
import clienteRouter from "./clientes";
import petRouter from "./pet";

const router = Router();

router.use("/api", clienteRouter);
router.use("/api", petRouter);

export default router;
