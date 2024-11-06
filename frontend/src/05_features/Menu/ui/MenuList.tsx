import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IMenuModel} from "../model/MenuModel";
import {CategoryContainer, CategoryList} from "../../Category";
import {fetchMenus} from "../api/menuApi";

interface IMenuItemProps {
    menus: IMenuModel[];
}

type TMenuVisibility = {
    [menuId: string]: boolean;
}

const MenuList: React.FC<IMenuItemProps> = ({menus}) => {
    const [categoryVisibility, setCategoryVisibility] = useState<TMenuVisibility>({});

    useEffect(() => {
        const initializeCategoryVisibility = () => {
            const initialVisibility: TMenuVisibility = {};

            menus.forEach(menu => {
                initialVisibility[menu._id] = true;
            })

            setCategoryVisibility(initialVisibility);
        }

        initializeCategoryVisibility();

    }, [menus]);

    const toggleShowCategoryButton = (menuId: string): void => {
        setCategoryVisibility(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId],
        }));
    }

    return (
        <div>
            <h2>Menu list:</h2>
            {
                menus.length > 0
                    ? <ul>
                        {
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
                        }
                    </ul>
                    : <p>There are no menus</p>
            }
        </div>
    );
}

export default MenuList;