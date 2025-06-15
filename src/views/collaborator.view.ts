import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/data_base_conection";

export class CollaboratorView
  extends Model<CollaboratorViewAttributes>
  implements CollaboratorViewAttributes
{
  first_name!: String;
  last_name!: String;
  email!: String;
  date_entry!: Date;
  state_welcome_onboarding!: boolean;
  state_technical_onboarding!: Boolean;
  type_technical_onboarding!: String;
  date_technical_onboarding?: Date;
}

CollaboratorView.init(
  {
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
