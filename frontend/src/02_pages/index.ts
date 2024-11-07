import {lazy} from "react";

const HomePage = lazy(() => import("./HomePage"));
const AboutPage = lazy(() => import('./AboutPage'));
const FeaturePage = lazy(() => import('./FeaturePage'));

export {
    HomePage,
    AboutPage,
    FeaturePage,
}