import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello Word!!");
});

export default routes;
