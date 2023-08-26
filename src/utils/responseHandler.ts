import { Response } from "express";

export const errorResponse = (
  res: Response,
  statusCode: number = 500,
  error: any
) => res.status(statusCode).json(error);

export const successResponse = (
  res: Response,
  statusCode: number = 200,
  data?: any
) => res.status(statusCode).json(data);
