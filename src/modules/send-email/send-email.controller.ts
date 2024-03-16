import { Request, Response } from "express";
import { AppError } from "../../shared/errors/app.error";
import { SendEmailService } from "./send-email.service";

const sendEmailService = new SendEmailService();

export class SendEmailController {
  public async send(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;

      await sendEmailService.send(email);

      return res.status(200).json({
        status: 200,
        message: "Email sent",
      });
    } catch (error: any) {
      throw new AppError(error.message, error.message);
    }
  }
}
