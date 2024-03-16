import { AppError } from "../../shared/errors/app.error";
import { createConfigUtil } from "./utils/create-config.util";
import { createMessageUtil } from "./utils/create-message.util";

export class SendEmailService {
  public async send(email: string): Promise<void> {
    try {
      const configuration = createConfigUtil();
      const message = createMessageUtil(email);

      await configuration.sendMail(message);
    } catch (error: any) {
      throw new AppError(error.message, error.status);
    }
  }
}
