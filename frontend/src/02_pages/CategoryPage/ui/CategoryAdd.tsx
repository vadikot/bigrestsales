import React, {useState} from 'react';
import {IMenuModel, MenuContainer, MenuSelect} from "../../../05_features/Menu";
import {CategoryForm} from "../../../05_features/Category";

const CategoryAdd = () => {
    const [selectedMenu, setSelectedMenu] = useState<IMenuModel | null>(null);

    return (
        <div>
            <h2>Add new menu</h2>
            <MenuContainer render={(menus) => (
                <MenuSelect menus={menus} onMenuSelect={(menus) => setSelectedMenu(menus)}/>
            )}/>
            {
                selectedMenu && (
                    <CategoryForm menuId={selectedMenu._id}/>
                )
            }
        </div>
    );
};

export default CategoryAdd;