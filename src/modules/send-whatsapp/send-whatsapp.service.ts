import { AppError } from "../../shared/errors/app.error";
import { api } from "../../shared/services/axios";
import { createWhatsappMessageUtil } from "./utils/create-whatsapp-message.util";

export class SendWhatsAppService {
  public async send() {
    try {
      const message = createWhatsappMessageUtil();

      await api.post("/messages", message, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.META_ACCESS_TOKEN}`,
        },
      });
    } catch (error: any) {
      console.error(error.response);
      throw new AppError(error.message, error.status);
    }
  }
}
