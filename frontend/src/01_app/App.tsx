import React, {useEffect} from "react";
import axios from "axios";
import {MenuList} from "../04_widgets/Menu";

export const App: React.FC = () => {

    return (
        <div>
            <h1>Hello, Bigrestsales App</h1>
            <p>------------------------------------------------------------------</p>
            <MenuList/>
        </div>
    );
}