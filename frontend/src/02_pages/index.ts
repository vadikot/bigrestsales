import {lazy} from "react";

const HomePage = lazy(() => import("./HomePage"));
const MenuPage = lazy(() => import("./MenuPage"));
const CategoryPage = lazy(() => import("./CategoryPage"));
const TestsPage = lazy(() => import("./TestsPage"));
const AboutPage = lazy(() => import('./AboutPage'));
const FeaturePage = lazy(() => import('./FeaturePage'));

export {
    HomePage,
    MenuPage,
    CategoryPage,
    TestsPage,
    AboutPage,
    FeaturePage,
}