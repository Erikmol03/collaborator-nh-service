"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onboarding = void 0;
const sequelize_1 = require("sequelize");
const data_base_conection_1 = require("../db/data_base_conection");
class Onboarding extends sequelize_1.Model {
}
exports.Onboarding = Onboarding;
Onboarding.init({
    id_onboarding: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    state_welcome_onboarding: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    state_technical_onboarding: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    type_technical_onboarading: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: data_base_conection_1.sequelize,
    tableName: "onboarding",
    timestamps: false,
});
