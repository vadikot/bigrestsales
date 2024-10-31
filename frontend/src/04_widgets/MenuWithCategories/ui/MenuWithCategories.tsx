import React, {useEffect, useState} from 'react';
import {IMenuModel, MenuList} from "../../../05_features/Menu";
import axios from "axios";
import {CategoryList} from "../../../05_features/Category";

const MenuWithCategories: React.FC = () => {
    const [menus, setMenus] = useState<IMenuModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        axios.get<IMenuModel[]>('/api/menu/all')
            .then(response => {
                setMenus(response.data);
            })
            .catch(error => {
                console.error(error.message);
                setError("Ошибка загрузки меню.");
            })
            .then(() => {
                setIsLoading(false);
            });

    }, []);

    if (isLoading) {
        return <p>Loading menus...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <MenuList menuList={menus}/>
            {menus.length > 0 && <CategoryList menuId={menus[1]._id}/>}
        </div>
    );
};

export default MenuWithCategories;