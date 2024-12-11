import { useTheme } from 'app/providers/ThemeProviders';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { classNames } from '../shared/helpers/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

function App(): JSX.Element {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <ErrorBoundary>
        <Navbar />
        <button onClick={toggleTheme}>TOGGLE THEME</button>
        <AppRouter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
