import {CategoryModel} from "../models/categoryModel";

class CategoryService {
    async getAllCategoryByMenuId(menuId: string) {
        try {
            const allCategoriesByMenuId = await CategoryModel.find({menu_id: menuId});

            return allCategoriesByMenuId;
        } catch (e) {
            throw new Error('We can not fetch data from DB:' + (e as Error).message);
        }
    }

    async addCategoryToMenu(name: string, menuId: string) {
        try {
            const newCategory = new CategoryModel({
                name,
                menu_id: menuId,
            })

            return newCategory.save();
        } catch (e) {
            throw new Error('Could not add menu: ' + (e as Error).message);
        }
    }

    async addMultipleCategories(namesArr: string[], menuId: string) {
        try {
            const multipleCategoriesArr = namesArr.map(name => {
                return {
                    name,
                    menu_id: menuId,
                }
            });

            return CategoryModel.insertMany(multipleCategoriesArr);
        } catch (e) {
            throw new Error('Could not add menu: ' + (e as Error).message);
        }
    }
}

export const categoryService = new CategoryService();