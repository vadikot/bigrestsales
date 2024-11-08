import React from 'react';
import {Outlet} from "react-router-dom";

const CategoryPage = () => {
    return (
        <div>
            <h2>Category page</h2>
            <Outlet/>
        </div>
    );
};

export default CategoryPage;