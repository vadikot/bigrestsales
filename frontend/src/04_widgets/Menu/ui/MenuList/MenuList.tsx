import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IMenuModel} from "../../model/MenuModel";

const MenuList = () => {
    const [menus, setMenus] = useState<IMenuModel[]>([]);

    useEffect(() => {
        axios.get<IMenuModel[]>('/api/menu/all')
            .then(response => setMenus(response.data))
            .catch(error => console.log(error.message))
    }, [])

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