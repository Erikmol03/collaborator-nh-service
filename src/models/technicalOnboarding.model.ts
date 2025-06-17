import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db/dataBaseConection";

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
  id_onboarding!: number;
  type_technical_onboarding!: string;
  start_date!: Date;
  end_date!: Date;
}

TechnicalOnboarding.init(
  {
    id_onboarding: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_technical_onboarding: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "technical_onboarding",
    timestamps: false,
  }
);
