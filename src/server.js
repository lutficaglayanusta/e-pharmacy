import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { env } from "./utils/env.js";
import indexRoute from "./router/index.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

const PORT = Number(env("PORT", "3000"));

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());
  app.use(cookieParser());

  app.use("/api", indexRoute);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
  });
};
