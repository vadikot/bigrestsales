import {Schema, Document, model,} from "mongoose";

export interface ICategory extends Document {
    name: string;
    menu_id: string;
}

const categorySchema = new Schema<ICategory>({
    name: {type: "string", required: true},
    menu_id: {type: "string", required: true},
});

export const CategoryModel = model('Category', categorySchema);