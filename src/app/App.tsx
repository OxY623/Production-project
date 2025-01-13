import {useTheme} from "app/providers/ThemeProviders";
import {TranslatedErrorBoundary} from "./providers/ErrorBoundary";
import {classNames} from "../shared/libs/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import React, {useState, Suspense} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {PageLoading} from "widgets/PageLoading/ui/PageLoading";

const App: React.FC = () => {
  const {theme} = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div data-testid="app" className={classNames("app", {}, [theme])}>
      <TranslatedErrorBoundary>
        <Suspense fallback={<PageLoading />}>
          <Navbar />
          <button onClick={() => setIsOpen(true)}>Open modal</button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, in voluptatem
              consequatur nostrum a, quisquam voluptates minus voluptatum quasi tempora hic deserunt
              voluptatibus vel quos, sunt atque incidunt ullam quod.
            </span>
          </Modal>
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
