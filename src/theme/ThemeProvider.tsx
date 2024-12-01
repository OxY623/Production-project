import { useMemo, useState, ReactNode } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { Theme } from './ThemeContext';

type ThemeProviderProps = {
  children: ReactNode; // Тип для дочерних элементов
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
