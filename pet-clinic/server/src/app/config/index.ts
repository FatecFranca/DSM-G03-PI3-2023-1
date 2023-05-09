import { Express } from "express";
import connectToMongoDB from "../database";
import appMiddleware from "./middleware";

const appConfig = (app: Express): void => {
  connectToMongoDB();
  appMiddleware(app);
};

export default appConfig;
