import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {
    AboutPage,
    CategoryAdd,
    CategoryAll,
    CategoryPage,
    DishAdd,
    DishAll,
    DishPage,
    FeaturePage,
    HomePage,
    MenuAdd,
    MenuAll,
    MenuPage,
    TestsPage
} from "../../../02_pages";
import {DishAddFormType} from "../../../02_pages/DishPage/ui/DishAdd";

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
                    <Route path="/dish" element={<DishPage/>}>
                        <Route path="all" element={<DishAll/>}/>
                        <Route path="add" element={<DishAdd formType={DishAddFormType.single}/>}/>
                        <Route path="add-multiple" element={<DishAdd formType={DishAddFormType.multiple}/>}/>
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