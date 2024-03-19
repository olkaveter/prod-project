import { RoutesProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RoutesProps> = {
  [AppRoutes.MAIN]: {
    location: RoutePath.main,
    children: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    location: RoutePath.about,
    children: <AboutPage />,
  }
}