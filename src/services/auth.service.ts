import { generateToken } from "../utilities/generateToken";

export const authService = () => {
  const token = generateToken();
  return token;
};
