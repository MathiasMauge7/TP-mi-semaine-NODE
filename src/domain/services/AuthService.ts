import jwt from "jsonwebtoken";
import env from "../../config/env";

const { JWT_SECRET } = env;

export class AuthService {
  // On générer un JWT pour un user avec une durée de validité de 30 mn
  issueAccessToken(id: string): string {
    return jwt.sign({ userId: id }, JWT_SECRET, { expiresIn: "30m" });
  }
}
