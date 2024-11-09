import {IDishFormPostType, IDishModel} from "../model/DishModel";
import axios, {AxiosResponse} from "axios";
import {splitMultipleDishesString} from "../lib/util";

export const fetchDishes = async (categoryId: string): Promise<IDishModel[]> => {
    const response: AxiosResponse = await axios.get('/api/dish/all', {
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

export const addMultipleDishesToMenu = async (categoryId: string, inputData: string): Promise<AxiosResponse<any>> => {
    const splitDishesArr: IDishFormPostType[] = splitMultipleDishesString(inputData);
    const response = await axios.post('/api/dish/add-multiple',
        {
            categoryId,
            dishesArr: splitDishesArr, // backend expects array of strings
        })

    return response.data;
};