import "dotenv/config";
import "express-async-errors";

import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error.handler.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
