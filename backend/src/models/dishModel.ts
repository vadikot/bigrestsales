import {Document, model, Schema} from "mongoose";

export interface IDishModel extends Document {
    name: string;
    ingredients: string;
    description?: string;
    allergens?: string
    calories?: string;
    price?: number;
    category_id: string;
}

const dishScheme = new Schema<IDishModel>({
    name: {required: true, type: String},
    ingredients: {required: true, type: String},
    description: String,
    allergens: String,
    calories: String,
    price: Number,
    category_id: {required: true, type: String},
});

export const DishModel = model('Dish', dishScheme);
