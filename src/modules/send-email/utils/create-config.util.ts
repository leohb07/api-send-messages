import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export function createConfigUtil(): nodemailer.Transporter<SMTPTransport.SentMessageInfo> {
  const config = {
    service: "gmail",
    auth: {
      user: process.env.GMAIL_APP_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  };

  return nodemailer.createTransport(config);
}
