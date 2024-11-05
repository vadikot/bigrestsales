import {IDishModel} from "../model/DishModel";
import axios, {AxiosResponse} from "axios";

export const fetchDishes = async (categoryId: string): Promise<IDishModel[]> => {
    const response: AxiosResponse = await axios.get('api/dish/all', {
        params: {categoryId},
    });

    return response.data;
}