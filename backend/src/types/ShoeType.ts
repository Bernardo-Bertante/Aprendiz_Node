import { z } from "zod";

const Shoe = z.object({
    name: z.string(),
    model: z.string(),
    colorWay: z.string(),
    year: z.string(),
    image: z.string(),
    description: z.string(),
    price: z.number(),
    sizes: z.array(z.number()),
});

type Shoe = z.infer<typeof Shoe>;

export { Shoe as ShoeType };
