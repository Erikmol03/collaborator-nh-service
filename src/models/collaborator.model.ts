import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db/dataBaseConection";

type CollaboratorOptionalAttributes = Optional<
  CollaboratorAttributes,
  "id_collaborator"
>;

export class Collaborator
  extends Model<CollaboratorOptionalAttributes, CollaboratorAttributes>
  implements CollaboratorAttributes
{
  id_collaborator!: Number;
  id_onboarding!: Number;
  first_name!: String;
  last_name!: String;
  email!: String;
  date_entry!: Date;
  state_welcome_onboarding!: boolean;
  state_technical_onboarding!: Boolean;
  date_technical_onboarding?: Date;
}

Collaborator.init(
  {
    id_collaborator: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_onboarding: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "technical_onboarding",
        key: "id_onboarding",
      },
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date_entry: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    state_welcome_onboarding: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    state_technical_onboarding: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date_technical_onboarding: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { sequelize, tableName: "collaborator", timestamps: false }
);
