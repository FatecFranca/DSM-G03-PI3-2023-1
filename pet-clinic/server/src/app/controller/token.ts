import jwt from "jsonwebtoken";
import { Cliente as clienteModel } from "../models/cliente";

const secret = process.env.SECRET;

const validaId = async (id: string) => {
  try {
    await clienteModel.findOne({ _id: id });
    return true;
  } catch (error) {
    return false;
  }
};

export const newToken = (id: string): string => {
  const token = jwt.sign({ id: id }, secret || "");

  return token;
};

interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
}

export const validateToken = async (token: string) => {
  try {
    const decodedToken: DecodedToken = jwt.verify(
      token.replace(/^['"]|['"]$/g, ""),
      secret || ""
    ) as DecodedToken;
    const id = decodedToken.id || null;

    if (typeof id == "string") {
      const validate = (await validaId(id)) ? id : null;
      console.log(validate);
      return validate;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
