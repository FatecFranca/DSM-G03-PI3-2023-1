import jwt from "jsonwebtoken";
import { Cliente as clienteModel } from "../models/cliente";

const secret = process.env.SECRET;

export const newToken = (id: string): string => {
  const token = jwt.sign({ id: id }, secret || "");

  return token;
};

interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
}

export const validateToken = async (token: string): Promise<string | null> => {
  try {
    const decodedToken: DecodedToken = jwt.verify(
      token.replace(/^['"]|['"]$/g, ""),
      secret || ""
    ) as DecodedToken;
    const id = decodedToken.id;

    const validate = await clienteModel
      .findOne({ _id: id })
      .then(() => id)
      .catch(() => null);

    return validate;
  } catch (err) {
    return null;
  }
};
