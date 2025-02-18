import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProviders/ui/ThemeProvider";
import "app/styles/index.scss";
import App from "./app/App";
import "./shared/config/i18n/i18n";
import {StoreProvider} from "app/providers/StoreProvider";

const element = document.getElementById("root");

if (!element) {
  throw new Error("Root element not found");
}

const root = createRoot(element);

root.render(
  (
    <StrictMode>
      <StoreProvider>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </StoreProvider>
    </StrictMode>
  ) as React.ReactElement<typeof App>,
);
