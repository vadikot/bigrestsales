import React, {useState} from 'react';
import {IMenuModel, MenuContainer, MenuSelect} from "../../../05_features/Menu";
import {CategoryContainer, CategorySelect, ICategoryModel} from "../../../05_features/Category";
import {DishForm} from "../../../05_features/Dish";
import DishFormMultiple from "../../../05_features/Dish/ui/DishFormMultiple";

export enum DishAddFormType {
    single = 'single',
    multiple = 'multiple',
}

interface DishAddProps {
    formType: DishAddFormType;
}

const DishAdd: React.FC<DishAddProps> = ({formType}) => {
    const [selectedMenu, setSelectedMenu] = useState<IMenuModel | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<ICategoryModel | null>(null);

    return (
        <div>
            <h2>Add new dish</h2>
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

                    (formType === DishAddFormType.single)
                        ? (<DishForm categoryId={selectedCategory._id}/>)
                        : (<DishFormMultiple categoryId={selectedCategory._id}/>)

                )
            }
        </div>
    );
};

export default DishAdd;