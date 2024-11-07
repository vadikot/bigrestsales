import {lazy} from "react";

const HomePage = lazy(() => import("./HomePage"));
// const MenuPage = lazy(() => import("./MenuPage/ui/MenuHome"));
// const CategoryPage = lazy(() => import("./CategoryPage/ui/CategoryPage"));
// const TestsPage = lazy(() => import("./TestsPage/ui/TestsPage"));
const AboutPage = lazy(() => import('./AboutPage'));
const FeaturePage = lazy(() => import('./FeaturePage'));

export * from './MenuPage';
export * from './CategoryPage';
export * from './TestsPage';

export {
    HomePage,
    AboutPage,
    FeaturePage,
}