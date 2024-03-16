import { Request, Response, Router } from "express";
import { name, version } from "../../package.json";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.redirect(301, "/version");
});

routes.get("/version", (_, res: Response) => {
  return res.status(200).json({
    name,
    version,
  });
});

export { routes };
