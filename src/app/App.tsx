import {useTheme} from "app/providers/ThemeProviders";
import {TranslatedErrorBoundary} from "./providers/ErrorBoundary";
import {classNames} from "../shared/libs/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {FC, Suspense} from "react";
import {PageLoading} from "widgets/PageLoading/ui/PageLoading";

import "./styles/index.scss";

const App: FC = () => {
  const {theme} = useTheme();

  return (
    <div data-testid="app" className={classNames("app", {}, [theme])}>
      <TranslatedErrorBoundary>
        <Suspense fallback={<PageLoading />}>
          <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
      </TranslatedErrorBoundary>
    </div>
  );
};

export default App;
