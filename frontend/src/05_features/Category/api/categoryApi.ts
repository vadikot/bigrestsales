import axios, {AxiosResponse} from "axios";
import {ICategoryModel} from "../model/CategoryModel";


export const fetchCategories = async (menuId: string): Promise<ICategoryModel[]> => {
    const response: AxiosResponse = await axios.get<ICategoryModel[]>('/api/category/all', {
        params: {
            menuId,
        }
    });

    return response.data;
};