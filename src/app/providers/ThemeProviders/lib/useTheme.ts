import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../ui/ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme == Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme && setTheme?.(newTheme);
    // document.body.className = newTheme || Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    toggleTheme,
    theme: theme ?? Theme.LIGHT,
  };
}
