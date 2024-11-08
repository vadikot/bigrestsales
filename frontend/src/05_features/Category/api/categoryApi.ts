import axios, {AxiosResponse} from "axios";
import {ICategoryModel} from "../model/CategoryModel";
import {cleanAndSplitCategoryNames} from "../lib/util";


export const fetchCategories = async (menuId: string): Promise<ICategoryModel[]> => {
    const response: AxiosResponse = await axios.get<ICategoryModel[]>('/api/category/all', {
        params: {
            menuId,
        }
    });

    return response.data;
};

export const addMultipleCategoriesToMenu = async (menuId: string, inputData: string): Promise<AxiosResponse<any>> => {
    const splitCategoryNames = cleanAndSplitCategoryNames(inputData);
    const response = await axios.post('/api/category/add-multiple',
        {
            namesArr: splitCategoryNames, // backend expects array of strings
            menuId
        })

    return response.data;
};