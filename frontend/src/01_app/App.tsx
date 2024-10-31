import React from "react";
import {MenuWithCategories} from "../04_widgets/MenuWithCategories";
import './styles/global.scss';
import {CategoryForm} from "../05_features/Category";

export const App: React.FC = () => {


    return (
        <div>
            <h1>Hello, Bigrestsales App</h1>
            <p>------------------------------------------------------------------</p>
            <MenuWithCategories/>
            <p>------------------------------------------------------------------</p>
            <CategoryForm menuId={'671c4680a115224bca0cc5b1'}/>
        </div>
    );
}