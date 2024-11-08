import React from 'react';
import {MenuContainer, MenuList} from "../../../05_features/Menu";

const CategoryAll = () => {
    return (
        <div>
            <MenuContainer render={(menus, handleDeleteMenu) => (
                <MenuList menus={menus} onDeleteMenu={handleDeleteMenu}/>
            )}/>
        </div>
    );
};

export default CategoryAll;