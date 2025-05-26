import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      hii?: string; // Add your custom property here
    }
  }
}