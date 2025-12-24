import express from "express";
import healthRoutes from "./routes/health.routes";
import notesRoutes from "./routes/notes.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use(healthRoutes);
app.use(notesRoutes);
app.use(errorHandler);

export default app;