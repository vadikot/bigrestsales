import React from "react";
import {MenuWithCategories} from "../04_widgets/MenuWithCategories";
import './styles/global.scss';

export const App: React.FC = () => {


    return (
        <div>
            <h1>Hello, Bigrestsales App</h1>
            <p>------------------------------------------------------------------</p>
            <MenuWithCategories/>
        </div>
    );
}