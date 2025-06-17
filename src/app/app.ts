import express, { Request, Response } from "express";
import cors from "cors";
import collaboratorRoutes from "../routes/collaborator.route";
import onboardingRoutes from "../routes/technicalOnboarding.route";
import authROutes from "../routes/auth.route";
import techOnboardingRoutes from "../routes/technicalOnboarding.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", collaboratorRoutes);
app.use("/api", onboardingRoutes);
app.use("/api", authROutes);
app.use("/api", techOnboardingRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.send("NovaHire esta vivo!");
});

export default app;
