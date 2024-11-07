import React, {useEffect, useState} from 'react';
import './Sidebar.scss'
import {NavLink, useLocation} from "react-router-dom";

interface IMenuLink {
    name: string;
    path: string;
}

const Sidebar = () => {
    const [isMenuPage, setIsMenuPage] = useState<boolean>(false);
    const [menuLinks, setMenuLinks] = useState<IMenuLink[]>([]);

    const location = useLocation();

    useEffect(() => {
        const isMenu = location.pathname.includes('menu');
        setIsMenuPage(isMenu);

        if (isMenu) {
            setMenuLinks([
                {name: 'Show all', path: 'all'},
                {name: 'Add new', path: 'add'}
            ]);
        } else {
            setMenuLinks([]);
        }
    }, [location.pathname])

    return (
        <div className={'sidebar'}>
            <h4>sidebar</h4>
            <br/>
            {
                isMenuPage && (
                    <ul className={"sidebar-list"}>
                        {
                            menuLinks.map(linkMenu => (<li key={linkMenu.path}><NavLink className={'navbar-link'}
                                                                                        to={'/menu/' + linkMenu.path}>{linkMenu.name}</NavLink>
                            </li>))
                        }
                    </ul>
                )
            }
        </div>
    );
};

export default Sidebar;