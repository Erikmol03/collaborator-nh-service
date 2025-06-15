"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorView = void 0;
const sequelize_1 = require("sequelize");
const data_base_conection_1 = require("../db/data_base_conection");
class CollaboratorView extends sequelize_1.Model {
}
exports.CollaboratorView = CollaboratorView;
CollaboratorView.init({
    first_name: sequelize_1.DataTypes.STRING,
    last_name: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    date_entry: sequelize_1.DataTypes.DATE,
    state_welcome_onboarding: sequelize_1.DataTypes.BOOLEAN,
    state_technical_onboarding: sequelize_1.DataTypes.BOOLEAN,
    type_technical_onboarding: sequelize_1.DataTypes.STRING,
    date_technical_onboarding: sequelize_1.DataTypes.DATE,
}, {
    sequelize: data_base_conection_1.sequelize,
    modelName: "CollaboratorView",
    tableName: "view_collaborators_info",
    timestamps: false,
    defaultScope: {
        attributes: {
            exclude: ["id"],
        },
    },
});
