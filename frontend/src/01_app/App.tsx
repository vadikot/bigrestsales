import React, {Suspense} from "react";
import './styles/global.scss';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {AboutPage, FeaturePage, HomePage} from "../02_pages";


export const App: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/features">Features</Link>
                </nav>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/features" element={<FeaturePage/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}