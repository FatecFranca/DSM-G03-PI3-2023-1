import consultaController from "../controller/consultaController";
import { Router } from "express";
import upload from "../config/middleware/multer";

const router = Router();

router
  .route("/consulta")
  .post((req, res) => consultaController.create(req, res));

router
  .route("/consulta/cliente/:petId")
  .get((req, res) => consultaController.getCliente(req, res));

router
  .route("/consulta/vet/:dia/:mes/:ano")
  .get((req, res) => consultaController.getVet(req, res));

router
  .route("/consulta/upload")
  .post(upload.single("file"), (req, res) =>
    consultaController.upload(req, res)
  );

router
  .route("/consulta/download/:petId/:consulta_id/:number")
  .get((req, res) => consultaController.download(req, res));

export default router;
