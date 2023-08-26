import { IUser } from "src/models/user";

declare global {
  export namespace Express {
    interface Request {
      user: any;
    }
  }
}
