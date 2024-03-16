import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";

export function errorHandler(
  error: Error & AppError,
  _: Request,
  res: Response,
  __: NextFunction
) {
  console.error(`AppError | ${error.message} | ${error.statusCode}`);

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }

  res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
}
