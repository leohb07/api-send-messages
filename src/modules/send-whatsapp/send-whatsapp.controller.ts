import { Request, Response } from "express";
import { SendWhatsAppService } from "./send-whatsapp.service";
import { AppError } from "../../shared/errors/app.error";

const sendWhatsappService = new SendWhatsAppService();

export class SendWhatsappController {
  public async send(_: Request, res: Response): Promise<Response> {
    try {
      await sendWhatsappService.send();

      return res.status(200).json({
        status: 200,
        message: "Success sent message",
      });
    } catch (error: any) {
      throw new AppError(error.message, error.status);
    }
  }
}
