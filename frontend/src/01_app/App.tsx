import React, {useState} from "react";
import {MenuWithCategories} from "../04_widgets/MenuWithCategories";
import './styles/global.scss';
import {CategoryContainer, CategoryForm, CategoryList, CategorySelect, ICategoryModel} from "../05_features/Category";
import {DishList} from "../05_features/Dish";

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
            <CategoryContainer menuId={'671ae249e49b039706d09b60'} render={(categories) => (
                <CategorySelect categories={categories}
                                onCategorySelect={(category) => handleSelectedCategory(category)}/>
            )}/>
            <h3>Dishes for {selectedCategory?.name} category</h3>
            <DishList categoryId={selectedCategory?._id}/>
        </div>
    );
}