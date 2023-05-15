import jwt from "jsonwebtoken";

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

export const validateToken = (token: string): string | null => {
  try {
    const decodedToken: DecodedToken = jwt.verify(
      token.replace(/^['"]|['"]$/g, ""),
      secret || ""
    ) as DecodedToken;
    return decodedToken.id;
  } catch (err) {
    return null;
  }
};
