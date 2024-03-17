import { Request, Response, Router } from "express";
import { name, version } from "../../package.json";
import { sendEmailRoutes } from "../modules/send-email/send-email.routes";
import { sendWhatsappRoutes } from "../modules/send-whatsapp/send-whatsapp.routes";

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

routes.use("/email", sendEmailRoutes);
routes.use("/whatsapp", sendWhatsappRoutes);

export { routes };
