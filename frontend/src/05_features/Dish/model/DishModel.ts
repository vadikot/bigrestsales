export interface IDishModel {
    _id: string;
    name: string;
    ingredients: string;
    description?: string;
    allergens?: string
    calories?: string;
    price?: number;
    category_id: string;
}