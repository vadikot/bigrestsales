import React, {Suspense} from "react";
import './styles/global.scss';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {HomePage, MenuPage, CategoryPage, TestsPage, AboutPage, FeaturePage} from "../02_pages";


export const App: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> | <Link
                    to="/category">Category</Link> | <Link to="/tests">Tests</Link> | <Link
                    to="/about">About</Link> | <Link
                    to="/features">Features</Link>
                </nav>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/menu" element={<MenuPage/>}/>
                        <Route path="/category" element={<CategoryPage/>}/>
                        <Route path="/tests" element={<TestsPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/features" element={<FeaturePage/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}