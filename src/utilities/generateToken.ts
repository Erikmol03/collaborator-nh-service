import jwt from "jsonwebtoken";

export const generateToken = () => {
  const payload = {
    id: "1",
    email: "admin@correo.com.co",
    rol: "Admin",
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
  return token;
};
