import { ShoeType } from "../types/ShoeType";
import ShoesRepository from "../repositories/ShoesRepository";

const addShoe = async (shoe: ShoeType) => {
    try {
        const result = ShoesRepository.addShoe(shoe);
        return result;
    } catch (error) {
        throw error;
    }
};

export default { addShoe };
