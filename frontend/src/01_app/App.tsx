import React, {useState} from "react";
import {MenuWithCategories} from "../04_widgets/MenuWithCategories";
import './styles/global.scss';
import {CategoryContainer, CategoryForm, CategoryList, CategorySelect, ICategoryModel} from "../05_features/Category";

export const App: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<ICategoryModel | null>(null);

    const handleSelectedCategory = (category: ICategoryModel): void => {
        setSelectedCategory(category);
    }

    return (
        <div>
            <h1>Hello, Bigrestsales App</h1>
            <p>------------------------------------------------------------------</p>
            <MenuWithCategories/>
            <p>------------------------------------------------------------------</p>
            <CategoryForm menuId={'671c4680a115224bca0cc5b1'}/>
            <p>------------------------------------------------------------------</p>

            Chosen category is : {selectedCategory?.name} (id: {selectedCategory?._id})
            <CategoryContainer menuId={'671c4680a115224bca0cc5b1'} render={(categories) => (
                <CategorySelect categories={categories}
                                onCategorySelect={(category) => handleSelectedCategory(category)}/>
            )}/>
        </div>
    );
}