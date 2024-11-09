import {IDishFormPostType} from "../model/DishModel";

export const splitMultipleDishesString = (inputData: string): IDishFormPostType[] => {
    const dishPattern = /([^,]+?)\s*\(([^)]+)\)\s*,?/g;
    const dishes: IDishFormPostType[] = [];
    let match;

    while ((match = dishPattern.exec(inputData)) !== null) {
        const name = match[1].trim();
        const ingredients = match[2].trim();

        dishes.push({name, ingredients});
    }

    return dishes;
}