import express, { Request, Response } from "express";
import cors from "cors";
import collaboratorRoutes from "../routes/collaborator.route";
import onboardingRoutes from "../routes/technical_onboarding.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", collaboratorRoutes);
app.use("/api", onboardingRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.send("NovaHire esta vivo!");
});

export default app;
