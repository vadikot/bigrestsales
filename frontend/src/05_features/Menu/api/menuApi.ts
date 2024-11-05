import {IMenuModel} from "../model/MenuModel";
import axios, {AxiosResponse} from "axios";

export const fetchMenus = async (): Promise<IMenuModel[]> => {
    const response: AxiosResponse = await axios.get<IMenuModel[]>('/api/menu/all');

    return response.data;
}