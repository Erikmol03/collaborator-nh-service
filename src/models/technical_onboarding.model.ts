import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db/data_base_conection";

type TechnicalOnboardingOptionalAttributes = Optional<
  TechnicalOnboardingAttributes,
  "id_onboarding"
>;

export class TechnicalOnboarding
  extends Model<
    TechnicalOnboardingAttributes,
    TechnicalOnboardingOptionalAttributes
  >
  implements TechnicalOnboardingAttributes
{
  public id_onboarding!: number;
  public state_technical_onboarding!: boolean;
  public type_technical_onboarding!: string;
  public date_technical_onboarding?: Date;
}

TechnicalOnboarding.init(
  {
    id_onboarding: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    state_technical_onboarding: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    type_technical_onboarding: {
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
    tableName: "technical_onboarding",
    timestamps: false,
  }
);
