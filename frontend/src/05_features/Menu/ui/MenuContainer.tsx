import React, {useEffect, useState} from 'react';
import {IMenuModel} from "../index";
import {fetchMenus} from "../api/menuApi";

interface IMenuContainerProps {
    render: (menus: IMenuModel[]) => React.ReactNode;
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

    if (isLoading) return <p>Loading menus...</p>;
    if (error) return <p>Error loading menus: {error}</p>;

    return (
        <>{render(menus)}</>
    );
};

export default MenuContainer;