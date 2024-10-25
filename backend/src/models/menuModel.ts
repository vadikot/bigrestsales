import mongoose, {Schema, Document} from "mongoose";

export interface IMenu extends Document {
    name: string;
    user_id: string;
}

const menuScheme = new Schema<IMenu>({
    name: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
});

export const MenuModel = mongoose.model('Menu', menuScheme);