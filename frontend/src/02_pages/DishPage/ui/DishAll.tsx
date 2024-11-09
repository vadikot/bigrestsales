import React, {useState} from 'react';
import {IMenuModel, MenuContainer, MenuSelect} from "../../../05_features/Menu";
import {CategoryContainer, CategorySelect, ICategoryModel} from "../../../05_features/Category";
import {DishList} from "../../../05_features/Dish";

const DishAll = () => {
    const [selectedMenu, setSelectedMenu] = useState<IMenuModel | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<ICategoryModel | null>(null);

    return (
        <div>
            <MenuContainer render={(menus) => (
                <MenuSelect menus={menus} onMenuSelect={(menus) => setSelectedMenu(menus)}/>
            )}/>
            {
                selectedMenu && (
                    <CategoryContainer menuId={selectedMenu._id} render={(categories) => (
                        <CategorySelect categories={categories}
                                        onCategorySelect={(categories) => setSelectedCategory(categories)}/>
                    )}/>
                )
            }
            {
                selectedCategory && (
                    <DishList categoryId={selectedCategory._id}/>
                )
            }
        </div>
    );
};

export default DishAll;