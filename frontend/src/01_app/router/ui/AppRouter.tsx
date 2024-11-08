import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {
    AboutPage,
    CategoryAdd, CategoryAll,
    CategoryPage,
    FeaturePage,
    HomePage,
    MenuAdd,
    MenuAll,
    MenuPage,
    TestsPage
} from "../../../02_pages";

const AppRouter = () => {
    return (
        <div className={'content-wrap'}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/menu" element={<MenuPage/>}>
                        <Route path="all" element={<MenuAll/>}/>
                        <Route path="add" element={<MenuAdd/>}/>
                    </Route>
                    <Route path="/category" element={<CategoryPage/>}>
                        <Route path="all" element={<CategoryAll/>}/>
                        <Route path="add" element={<CategoryAdd/>}/>
                    </Route>
                    <Route path="/tests" element={<TestsPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/features" element={<FeaturePage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;