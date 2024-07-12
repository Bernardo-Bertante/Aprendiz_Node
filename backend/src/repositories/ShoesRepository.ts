import { ShoeType } from "../types/ShoeType";
import { ShoeModel } from "../model/ShoeModel";

const addShoe = async (shoe: ShoeType) => {
    try {
        await ShoeModel.sync();
        await ShoeModel.create(shoe);
        return shoe;
    } catch (error) {
        throw error;
    }
};

export default { addShoe };
