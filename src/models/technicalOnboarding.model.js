"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalOnboarding = void 0;
const sequelize_1 = require("sequelize");
const dataBaseConection_1 = require("../db/dataBaseConection");
class TechnicalOnboarding extends sequelize_1.Model {
}
exports.TechnicalOnboarding = TechnicalOnboarding;
TechnicalOnboarding.init({
    id_onboarding: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type_technical_onboarding: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    start_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: dataBaseConection_1.sequelize,
    tableName: "technical_onboarding",
    timestamps: false,
});
