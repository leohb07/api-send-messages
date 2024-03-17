import { Router } from "express";
import { SendWhatsappController } from "./send-whatsapp.controller";

const sendWhatsappRoutes = Router();

const sendWhatsappController = new SendWhatsappController();

sendWhatsappRoutes.post("/send-message", sendWhatsappController.send);

export { sendWhatsappRoutes };
