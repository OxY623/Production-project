import {useMemo, useState, ReactNode, useEffect} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {Theme} from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({children}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const defaultProps = useMemo(() => ({theme, setTheme}), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
