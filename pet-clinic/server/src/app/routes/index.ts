import { Router } from "express";
import clienteRouter from "./clientes";
import petRouter from "./pet";
import vetRouter from "./veterinario";
import adminRouter from "./admin";

const router = Router();

router.use("/api", clienteRouter);
router.use("/api", petRouter);
router.use("/api", vetRouter);
router.use("/api", adminRouter);

export default router;
