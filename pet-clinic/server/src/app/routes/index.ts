import { Router } from "express";
import clienteRouter from "./clientes";
import petRouter from "./pet";
import vetRouter from "./veterinario";
import adminRouter from "./admin";
import consultaRouter from "./consulta";

const router = Router();

router.use("/api", clienteRouter);
router.use("/api", petRouter);
router.use("/api", vetRouter);
router.use("/api", adminRouter);
router.use("/api", consultaRouter);

export default router;
