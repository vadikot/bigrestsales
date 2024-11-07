import React from "react";
import './styles/global.scss';
import {AppRouter} from "./router";
import {Navbar} from "../04_widgets/Navbar";


export const App: React.FC = () => {

    return (
        <div id={"app"}>
            <Navbar/>
            <div className={'page-content'}>
                {/*<Sidebar/>*/}
                <AppRouter/>
            </div>
        </div>
    );
}