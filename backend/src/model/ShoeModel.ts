import sequelize from "../connection/connection";
import { DataType, DataTypes, Model } from "sequelize";

class Shoe extends Model {
    declare name: string;
    declare model: string;
    declare colorWay: string;
    declare year: string;
    declare image: string;
    declare description: string;
    declare price: number;
    declare sizes: number[];
}

Shoe.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        colorWay: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        sizes: {
            type: DataTypes.ARRAY(DataTypes.FLOAT),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Shoe",
        tableName: "ShoeAttributes",
        schema: "public",
    }
);

export { Shoe as ShoeModel };
