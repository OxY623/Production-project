import { Route, Routes } from 'react-router-dom';
// import { AboutPage } from 'pages/AboutPage';
// import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
  return (
    <Suspense fallback={<div>🌀 Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route path={path} element={element} />;
        })}
        {/* <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<MainPage />} /> */}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
