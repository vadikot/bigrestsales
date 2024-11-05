import React, {useEffect} from 'react';
import {IMenuModel} from "../model/MenuModel";

interface IMenuSelectProps {
    menus: IMenuModel[];
    onMenuSelect: (menu: IMenuModel) => void;
}

const MenuSelect: React.FC<IMenuSelectProps> = ({menus, onMenuSelect}) => {
    const defaultValue = menus.length > 0 ? menus[0]._id : "";

    useEffect(() => {
        if (menus.length > 0) {
            onMenuSelect(menus[0]); //return initial menu from select (first in array)
        }
    }, []);

    return (
        <div>
            <label htmlFor={'menus'}>Choose a menu:</label>

            <select
                defaultValue={defaultValue}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const selectedMenu = menus.find(menu => menu._id === e.target.value);
                    if (selectedMenu) {
                        onMenuSelect(selectedMenu);
                    }
                }}
                name={'menus'} id={'menus'}>
                {
                    menus.map(menus => (
                            <option
                                key={menus._id}
                                value={menus._id}
                            >{menus.name}</option>
                        )
                    )
                }
            </select>
        </div>
    );
};

export default MenuSelect;