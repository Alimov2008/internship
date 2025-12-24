import express from "express";
import healthRoutes from "./routes/health.routes";
import notesRoutes from "./routes/notes.routes";

const app = express();

app.use(express.json());

app.use(healthRoutes);
app.use(notesRoutes);

export default app;