import { Router } from "express";
import { ShoesController } from "../controllers/ShoesController";

const router = Router();

router.use("/shoes", ShoesController);

export { router as ShoesRouter };
