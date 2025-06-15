"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalOnboardingView = void 0;
const sequelize_1 = require("sequelize");
const data_base_conection_1 = require("../db/data_base_conection");
class TechnicalOnboardingView extends sequelize_1.Model {
}
exports.TechnicalOnboardingView = TechnicalOnboardingView;
TechnicalOnboardingView.init({
    email: sequelize_1.DataTypes.STRING,
    date_technical_onboarding: sequelize_1.DataTypes.DATE,
}, {
    sequelize: data_base_conection_1.sequelize,
    modelName: "TechnicalOnboardingView",
    tableName: "view_tech_onboarding_date_info",
    timestamps: false,
    defaultScope: {
        attributes: {
            exclude: ["id"],
        },
    },
});
