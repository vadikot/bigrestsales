import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IMenuModel} from "../model/MenuModel";
import {CategoryContainer, CategoryList} from "../../Category";

interface IMenuItemProps {
    menuList?: IMenuModel[]; // Optional menu list if already passed via props
}

type TMenuVisibility = {
    [menuId: string]: boolean;
}

const MenuList: React.FC<IMenuItemProps> = ({menuList}) => {
    const [menus, setMenus] = useState<IMenuModel[]>(menuList || []);
    const [categoryVisibility, setCategoryVisibility] = useState<TMenuVisibility>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initializeCategoryVisibility = () => {
            const initialVisibility: TMenuVisibility = {};

            menus.forEach(menu => {
                initialVisibility[menu._id] = true;
            })

            setCategoryVisibility(initialVisibility);
        }

        if (menuList) {
            initializeCategoryVisibility();
        } else {
            axios.get<IMenuModel[]>('/api/menu/all')
                .then(response => {
                    setMenus(response.data);
                    initializeCategoryVisibility()
                })
                .catch(error => setError(error.message || 'Error loading menu from database'));
        }

    }, [menuList]);

    const toggleShowCategoryButton = (menuId: string): void => {
        setCategoryVisibility(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId],
        }));
    }

    return (
        <div>
            <h2>Menu list:</h2>
            <ul>
                {
                    error
                        ? (
                            <p>{error}</p>
                        ) : (
                            menus.map(menu => (
                                <li key={menu._id}>
                                    {menu.name}
                                    <button disabled>edit</button>
                                    <button disabled>delete</button>
                                    <button
                                        onClick={() => toggleShowCategoryButton(menu._id)}>{categoryVisibility[menu._id] ? 'Show' : 'Hide'} categories
                                    </button>
                                    <ul className={categoryVisibility[menu._id] ? 'category-list-hidden' : ""}>
                                        {
                                            !categoryVisibility[menu._id] && (
                                                <CategoryContainer menuId={menu._id}
                                                                   render={(categories) => <CategoryList categories={categories}
                                                                   />}
                                                />
                                            )
                                        }
                                    </ul>
                                </li>
                            ))
                        )}
            </ul>
        </div>
    );
};

export default MenuList;