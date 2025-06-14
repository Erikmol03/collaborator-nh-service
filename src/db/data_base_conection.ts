import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_SCHEMA as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: "mysql",
        logging: false

    }
);

export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la DB establecida")
    } catch (error) {
        console.error("Error al conectar a la DB", error);

    }
};