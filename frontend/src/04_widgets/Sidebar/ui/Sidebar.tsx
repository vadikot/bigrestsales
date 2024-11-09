import React, {useEffect, useState} from 'react';
import './Sidebar.scss'
import {NavLink, useLocation} from "react-router-dom";

interface ILink {
    name: string;
    path: string;
}

enum LinkType {
    menu = 'menu',
    category = "category",
    dish = "dish",
}

const Sidebar = () => {
    const [links, setLinks] = useState<ILink[]>([]);

    const location = useLocation();

    useEffect(() => {
        let currentPageType: LinkType | null = null;

        if (location.pathname.includes(LinkType.menu)) {
            currentPageType = LinkType.menu;
        } else if (location.pathname.includes(LinkType.category)) {
            currentPageType = LinkType.category;
        } else if (location.pathname.includes(LinkType.dish)) {
            currentPageType = LinkType.dish;
        }

        switch (currentPageType) {
            case LinkType.menu:
                setLinks([
                    {name: 'Show all', path: 'all'},
                    {name: 'Add new', path: 'add'}
                ]);
                break;
            case LinkType.category:
                setLinks([
                    {name: 'Show all', path: 'all'},
                    {name: 'Add new', path: 'add'},
                    {name: 'test', path: 'test'},
                ]);
                break;
            case LinkType.dish:
                setLinks([
                    {name: 'Show all', path: 'all'},
                    {name: 'Add new', path: 'add'},
                    {name: 'dish test', path: 'test'},
                ]);
                break;
            default:
                setLinks([]);
        }
    }, [location.pathname])

    return (
        <div className={'sidebar'}>
            <h4>sidebar</h4>
            <br/>
            {
                links.length > 0 && (
                    <ul className={"sidebar-list"}>
                        {
                            links.map(link => (<li key={link.path}><NavLink className={'navbar-link'}
                                                                            to={`/${location.pathname.split('/')[1]}/` + link.path}>{link.name}</NavLink>
                            </li>))
                        }
                    </ul>
                )
            }
        </div>
    );
};

export default Sidebar;