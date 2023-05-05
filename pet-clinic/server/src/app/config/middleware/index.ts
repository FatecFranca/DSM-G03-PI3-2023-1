import express, { Express } from "express";
import cors from "cors";
import routes from "../../routes";

const appMiddleware = (app: Express): void => {
  app.use(cors());
  app.use(express.json());
  app.use(routes);
};

export default appMiddleware;
