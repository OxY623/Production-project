import {useTheme} from "app/providers/ThemeProviders";
import {ErrorBoundary} from "./providers/ErrorBoundary";
import {classNames} from "../shared/helpers/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/Navbar";
import "./styles/index.scss";
import {Sidebar} from "widgets/Sidebar";
import {FC, Suspense} from "react";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";

const App: FC = () => {
  const {theme} = useTheme();
  return (
    <div data-testid="app" className={classNames("app", {}, [theme])}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />

          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
