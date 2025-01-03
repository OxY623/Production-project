import AboutPage from "pages/AboutPage/ui/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {MainPage} from "pages/MainPage";
import {RouteProps} from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RoutePatch: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePatch.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePatch.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePatch.not_found,
    element: <NotFoundPage />,
  },
};
