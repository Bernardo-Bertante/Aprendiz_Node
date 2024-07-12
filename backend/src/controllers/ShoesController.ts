import { Router, Request, Response } from "express";
import { ShoeType } from "../types/ShoeType";
import ShoeServices from "../services/ShoeServices";

const router = Router();

router.post("/add", async (req: Request, res: Response) => {
    const newShoe: ShoeType = {
        name: req.body.name,
        model: req.body.model,
        colorWay: req.body.colorWay,
        year: req.body.year,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        sizes: req.body.sizes,
    };

    try {
        const result = await ShoeServices.addShoe(newShoe);
        res.status(201).send({
            message: "Shoe created successfully!",
            shoe: result.name,
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({
                message: error.message,
            });
        }
    }
});

export { router as ShoesController };
