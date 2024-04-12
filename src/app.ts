import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import router from "./infrastructure/web/routes";

import env from "./config/env";
import { requestLogger } from "./middlewares/loggers";

const app = express();

const { PORT } = env;

app.use(requestLogger);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
