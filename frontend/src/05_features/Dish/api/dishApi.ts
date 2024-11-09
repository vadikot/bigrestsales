import {IDishModel} from "../model/DishModel";
import axios, {AxiosResponse} from "axios";

export const fetchDishes = async (categoryId: string): Promise<IDishModel[]> => {
    const response: AxiosResponse = await axios.get('api/dish/all', {
        params: {categoryId},
    });

    return response.data;
}

export const addDishToCategory = async (categoryId: string, dish: { name: string, ingredients: string }): Promise<AxiosResponse<any>> => {
    const response = await axios.post('/api/dish/add',
        {
            ...dish,
            categoryId,
        },
        {
            params: {
                categoryId,
            }
        })

    return response.data;
};