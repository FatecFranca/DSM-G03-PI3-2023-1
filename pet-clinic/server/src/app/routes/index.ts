import { Router } from "express";
import clienteRouter from "./clientes";
import petRouter from "./pet";
import vetRouter from "./veterinario";

const router = Router();

router.use("/api", clienteRouter);
router.use("/api", petRouter);
router.use("/api", vetRouter);

export default router;
