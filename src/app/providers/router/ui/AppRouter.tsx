import {Route, Routes} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";
import {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => {
          return (
            <Route
              key={uuidv4()}
              path={path}
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <div className="page-wrapper">{element}</div>
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
