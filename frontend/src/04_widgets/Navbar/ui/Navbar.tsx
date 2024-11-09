import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <div className={"navbar-header"}>BigRestSales</div>
            <ul className={"nav navbar-nav"}>
                <li><NavLink className={'navbar-link'} to="/">Home</NavLink></li>
                <li><NavLink className={'navbar-link'} to="/menu">Menu</NavLink></li>
                <li><NavLink className={'navbar-link'} to="/category">Category</NavLink></li>
                <li><NavLink className={'navbar-link'} to="/dish">Dish</NavLink></li>
                <li><NavLink className={'navbar-link'} to="/tests">Tests</NavLink></li>
                <li><NavLink className={'navbar-link'} to="/about">About</NavLink></li>
                <li><NavLink className={'navbar-link'} to="/features">Features</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;