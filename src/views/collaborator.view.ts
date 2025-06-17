import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/dataBaseConection";

export class CollaboratorView
  extends Model<CollaboratorViewAttributes>
  implements CollaboratorViewAttributes
{
  id_collaborator!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  date_entry!: Date;
  state_welcome_onboarding!: boolean;
  state_technical_onboarding!: boolean;
  type_technical_onboarding!: string;
  date_technical_onboarding?: Date | undefined;
}

CollaboratorView.init(
  {
    id_collaborator: DataTypes.NUMBER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    date_entry: DataTypes.DATE,
    state_welcome_onboarding: DataTypes.BOOLEAN,
    state_technical_onboarding: DataTypes.BOOLEAN,
    type_technical_onboarding: DataTypes.STRING,
    date_technical_onboarding: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "CollaboratorView",
    tableName: "view_collaborators_info",
    timestamps: false,
    defaultScope: {
      attributes: {
        exclude: ["id"],
      },
    },
  }
);
