import React from 'react';
import {Outlet} from "react-router-dom";

const DishPage = () => {
    return (
        <div>
            <h2>Dish page</h2>
            <Outlet/>
        </div>
    );
};

export default DishPage;