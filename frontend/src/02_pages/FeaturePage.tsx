import React, {useState} from 'react';
import {IMenuModel, MenuContainer, MenuList, MenuSelect} from "../05_features/Menu";
import {CategoryContainer, CategorySelect, ICategoryModel} from "../05_features/Category";

const FeaturePage = () => {
    const [selectedCategory, setSelectedCategory] = useState<ICategoryModel | null>(null);
    const [selectedMenu, setSelectedMenu] = useState<IMenuModel | null>(null);

    const handleSelectedCategory = (category: ICategoryModel): void => {
        setSelectedCategory(category);
    }

    return (
        <div>
            <h1>Hello, Bigrestsales App</h1>
            <p>------------------------------------------------------------------</p>


            <MenuContainer render={(menus) => (
                <MenuSelect menus={menus} onMenuSelect={(menu) => setSelectedMenu(menu)}/>
            )}/>


            {/*<MenuWithCategories/>*/}
            {/*<p>------------------------------------------------------------------</p>*/}
            {/*<CategoryForm menuId={'671c4680a115224bca0cc5b1'}/>*/}
            {/*<p>------------------------------------------------------------------</p>*/}

            Chosen category is : {selectedCategory?.name} (id: {selectedCategory?._id})
            {
                selectedMenu && <CategoryContainer menuId={selectedMenu._id} render={(categories) => (
                    <CategorySelect categories={categories}
                                    onCategorySelect={(category) => handleSelectedCategory(category)}/>
                )}/>
            }

            <p>------------------------------------------------------------------</p>

            <MenuContainer render={(menus) => <MenuList menus={menus}/>}/>
            {/*<h3>Dishes for {selectedCategory?.name} category</h3>*/}
            {/*<DishList categoryId={selectedCategory?._id}/>*/}
        </div>
    );
};

export default FeaturePage;