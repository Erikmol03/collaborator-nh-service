"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaborator = void 0;
const sequelize_1 = require("sequelize");
const dataBaseConection_1 = require("../db/dataBaseConection");
class Collaborator extends sequelize_1.Model {
}
exports.Collaborator = Collaborator;
Collaborator.init({
    id_collaborator: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_onboarding: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "technical_onboarding",
            key: "id_onboarding",
        },
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    date_entry: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    state_welcome_onboarding: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    state_technical_onboarding: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    date_technical_onboarding: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, { sequelize: dataBaseConection_1.sequelize, tableName: "collaborator", timestamps: false });
