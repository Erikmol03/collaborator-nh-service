"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const collaborator_route_1 = __importDefault(require("../routes/collaborator.route"));
const technicalOnboarding_route_1 = __importDefault(require("../routes/technicalOnboarding.route"));
const auth_route_1 = __importDefault(require("../routes/auth.route"));
const technicalOnboarding_route_2 = __importDefault(require("../routes/technicalOnboarding.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", collaborator_route_1.default);
app.use("/api", technicalOnboarding_route_1.default);
app.use("/api", auth_route_1.default);
app.use("/api", technicalOnboarding_route_2.default);
app.get("/", (_req, res) => {
    res.send("NovaHire esta vivo!");
});
exports.default = app;
