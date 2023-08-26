import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/responseHandler";
import { verify } from "jsonwebtoken";
import { config } from "../config/env";

const { JWT_SECRET } = config;

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return errorResponse(res, 401, "Request not authenticated");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return errorResponse(res, 401, "Request not authenticated");
  }

  verify(token, JWT_SECRET as string, (err: any, decoded: any) => {
    if (err) return errorResponse(res, 403, "invalid token");
    req.user = decoded;
    return next();
  });
};
