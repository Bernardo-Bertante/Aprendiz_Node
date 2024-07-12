import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
        host: "localhost",
        dialect: "postgres",
    }
);

export default sequelize;
