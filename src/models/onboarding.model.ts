import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db/data_base_conection";

type OnboardingOptionalAttributes = Optional<
  OnboardingAttributes,
  "id_onboarding"
>;

export class Onboarding
  extends Model<OnboardingAttributes, OnboardingOptionalAttributes>
  implements OnboardingAttributes
{
  public id_onboarding!: number;
  public state_welcome_onboarding!: boolean;
  public state_technical_onboarding!: boolean;
  public type_technical_onboarading!: string;
  public date_technical_onboarding?: Date;
}

Onboarding.init(
  {
    id_onboarding: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    state_welcome_onboarding: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    state_technical_onboarding: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    type_technical_onboarading: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_technical_onboarding: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "onboarding",
    timestamps: false,
  }
);
