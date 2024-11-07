import React, {useEffect, useState} from 'react';
import {IMenuModel} from "../index";
import {deleteMenuById, fetchMenus} from "../api/menuApi";

interface IMenuContainerProps {
    render: (menus: IMenuModel[], onDeleteMenu: (id: string) => void) => React.ReactNode;
}

const MenuContainer: React.FC<IMenuContainerProps> = ({render}) => {
    const [menus, setMenus] = useState<IMenuModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchMenus()
            .then(data => setMenus(data))
            .catch(e => setError('Error loading menu from database:' + e.message))
            .then(() => setIsLoading(false));
    }, []);

    const handleDeleteMenu = (id: string) => {
        deleteMenuById(id)
            .then(response => {
                setMenus(prevState => prevState.filter(menu => menu._id !== id));
            })
            .catch(e => console.log(e))

    }

    if (isLoading) return <p>Loading menus...</p>;
    if (error) return <p>Error loading menus: {error}</p>;

    return (
        <>{render(menus, handleDeleteMenu)}</>
    );
};

export default MenuContainer;