import jwt from "jsonwebtoken";
import { Cliente as clienteModel } from "../models/cliente";
import { Veterinario as vetModel } from "../models/veterinario";
import { Admin as adminModel } from "../models/admin";

const secret = process.env.SECRET;

const validaId = async (id: string, collection: string) => {
  try {
    if (collection === "cliente") {
      await clienteModel.findOne({ _id: id });
      return true;
    } else if (collection === "vet") {
      await vetModel.findOne({ _id: id });
      return true;
    } else if (collection === "admin") {
      await adminModel.findOne({ _id: id });
      return true;
    }
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

export const validateToken = async (token: string, collection: string) => {
  try {
    const decodedToken: DecodedToken = jwt.verify(
      token.replace(/^['"]|['"]$/g, ""),
      secret || ""
    ) as DecodedToken;
    const id = decodedToken.id || null;

    if (typeof id == "string") {
      const validate = (await validaId(id, collection)) ? id : null;
      return validate;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
