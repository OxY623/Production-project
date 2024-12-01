import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';
import './styles/index.scss';

function App(): JSX.Element {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to='/'>Main Page</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
