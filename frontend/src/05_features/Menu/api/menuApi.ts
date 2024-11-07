import {IMenuModel} from "../model/MenuModel";
import axios, {AxiosResponse} from "axios";

export const fetchMenus = async (): Promise<IMenuModel[]> => {
    const response: AxiosResponse = await axios.get<IMenuModel[]>('/api/menu/all');

    return response.data;
}

export const addMenu = async (name: string, userId: string = '1'): Promise<AxiosResponse<any>> => {
    const response: AxiosResponse = await axios.post('/api/menu/add', {
        name,
        userId,
    });

    return response;
}

export const deleteMenuById = async (id: string): Promise<AxiosResponse<any>> => {
    const response: AxiosResponse = await axios.delete(`/api/menu/${id}`);

    return response;
}