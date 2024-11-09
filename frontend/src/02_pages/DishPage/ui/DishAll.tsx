import React, {useState} from 'react';
import {IMenuModel, MenuContainer, MenuSelect} from "../../../05_features/Menu";
import {CategoryContainer, CategoryList} from "../../../05_features/Category";

const DishAll = () => {
    const [selectedMenu, setSelectedMenu] = useState<IMenuModel | null>(null);

    return (
        <div>
            <MenuContainer render={(menus) => (
                <MenuSelect menus={menus} onMenuSelect={(menus) => setSelectedMenu(menus)}/>
            )}/>

            {
                selectedMenu && (
                    <CategoryContainer menuId={selectedMenu._id} render={categories => (
                        <CategoryList categories={categories}/>
                    )}/>
                )
            }
        </div>
    );
};

export default DishAll;