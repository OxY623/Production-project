import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProviders';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { classNames } from '../shared/helpers/classNames/classNames';
import './styles/index.scss';

function App(): JSX.Element {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <ErrorBoundary>
        <button onClick={toggleTheme}>TOGGLE THEME</button>
        <Link to='/'>Main Page</Link>
        <Link to='/about'>About</Link>
        <Suspense fallback={<div>🌀 Loading...</div>}>
          <Routes>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/' element={<MainPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
