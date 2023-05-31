import { Router } from "express";
import { adminController } from "../controller/adminController";

const router = Router();

router
  .route("/admin")
  .get((req, res) => adminController.get(req, res))
  .post((req, res) => adminController.create(req, res));

router
  .route("/admin/users")
  .get((req, res) => adminController.getUsers(req, res));

router
  .route("/admin/vets")
  .get((req, res) => adminController.getVets(req, res));

router
  .route("/admin/login")
  .post((req, res) => adminController.login(req, res));

export default router;
