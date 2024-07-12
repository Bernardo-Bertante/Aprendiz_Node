import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import { ShoesRouter } from "./routes/ShoesRoute";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(ShoesRouter);

export default app;
