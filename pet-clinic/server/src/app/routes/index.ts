import { Router } from "express";
import clienteRouter from "./clientes";

const router = Router();

router.use("/", clienteRouter);

export default router;
