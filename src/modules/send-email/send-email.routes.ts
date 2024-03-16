import { Router } from "express";
import { SendEmailController } from "./send-email.controller";

const sendEmailRoutes = Router();

const sendEmailController = new SendEmailController();

sendEmailRoutes.post("/send-email", sendEmailController.send);

export { sendEmailRoutes };
