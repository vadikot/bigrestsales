import {DishModel, IDishModel} from "../models/dishModel";

class DishService {
    async getAll(categoryId: string) {
        try {
            return DishModel.find({category_id: categoryId});
        } catch (e) {
            throw new Error('We can not fetch data from DB:' + (e as Error).message);
        }
    }

    async addDishToCategory(dish: IDishModel, categoryId: string) {
        try {
            const newDish = new DishModel({
                ...dish,
                category_id: categoryId,
            })

            return newDish.save();
        } catch (e) {
            throw new Error('Could not add dish: ' + (e as Error).message);
        }
    }

    async addMultipleDishes(dishesArr: IDishModel[], categoryId: string) {
        try {
            const multipleDishesArr = dishesArr.map(dish => {
                return {
                    ...dish,
                    category_id: categoryId,
                }
            });

            return DishModel.insertMany(multipleDishesArr);
        } catch (e) {
            throw new Error('Could not add dishes: ' + (e as Error).message);
        }
    }
}

export const dishService = new DishService();