import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {IMenuModel} from "../../model/MenuModel";

export interface IMenuItemProps {
    menusPropsValue?: IMenuModel[];
}

const MenuList: FC<IMenuItemProps> = ({menusPropsValue}) => {
    const [menus, setMenus] = useState<IMenuModel[]>(menusPropsValue || []);

    useEffect(() => {
        if (!menusPropsValue) {
            axios.get<IMenuModel[]>('/api/menu/all')
                .then(response => setMenus(response.data))
                .catch(error => console.log(error.message))
        }
    }, [menusPropsValue]);

    return (
        <div>
            <h2>Menu list:</h2>
            <ul>
                {menus.map(menu => (
                    <li key={menu._id}>
                        {menu.name}
                        <button disabled>edit</button>
                        <button disabled>delete</button>
                        <ul>
                            <label>categories</label>
                            <li>1</li>
                            <li>2</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuList;