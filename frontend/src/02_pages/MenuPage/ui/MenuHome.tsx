import React from 'react';
import {Outlet} from "react-router-dom";

const MenuHome = () => {
    return (
        <div>
            <h2>Menu Home page</h2>
            <Outlet/>
        </div>
    );
};

export default MenuHome;