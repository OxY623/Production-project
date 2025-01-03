import {Route, Routes} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoading} from "widgets/PageLoading/PageLoading";

const AppRouter = () => {
  return (
    // <Suspense fallback={<LoadingSpinner />}>
    <Routes>
      {Object.values(routeConfig).map(({path, element}) => {
        return (
          <Route
            key={uuidv4()}
            path={path}
            element={
              <Suspense fallback={<PageLoading />}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          />
        );
      })}
    </Routes>
    // </Suspense>
  );
};

export default AppRouter;
