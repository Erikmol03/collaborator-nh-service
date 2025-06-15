import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/data_base_conection";

export class TechnicalOnboardingView
  extends Model<ITechOnboardingDateView>
  implements ITechOnboardingDateView
{
  email!: string;
  date_technical_onboarding!: Date;
}

TechnicalOnboardingView.init(
  {
    email: DataTypes.STRING,
    date_technical_onboarding: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "TechnicalOnboardingView",
    tableName: "view_tech_onboarding_date_info",
    timestamps: false,
    defaultScope: {
      attributes: {
        exclude: ["id"],
      },
    },
  }
);
