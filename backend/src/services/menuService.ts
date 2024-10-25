import {MenuModel} from "../models/menuModel";

class MenuService {
    async getMenus() {
        try {
            return MenuModel.find();
        } catch (e) {
            throw new Error('Could not fetch all menu: ' + (e as Error).message);
        }
    }

    async addMenu(name: string, userId: string) {
        try {
            const menu = new MenuModel({
                name,
                user_id: userId,
            });

            return menu.save();
        } catch (e) {
            throw new Error('Could not add menu: ' + (e as Error).message);
        }
    }
}

const menuService = new MenuService();

export default menuService;