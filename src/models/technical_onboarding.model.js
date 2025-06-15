"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalOnboarding = void 0;
const sequelize_1 = require("sequelize");
const data_base_conection_1 = require("../db/data_base_conection");
class TechnicalOnboarding extends sequelize_1.Model {
}
exports.TechnicalOnboarding = TechnicalOnboarding;
TechnicalOnboarding.init({
    id_onboarding: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    state_technical_onboarding: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    type_technical_onboarding: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    date_technical_onboarding: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: data_base_conection_1.sequelize,
    tableName: "technical_onboarding",
    timestamps: false,
});
