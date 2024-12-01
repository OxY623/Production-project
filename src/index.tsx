import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProviders/ui/ThemeProvider';
import App from './app/App';

const element = document.getElementById('root');

if (!element) {
  throw new Error('Root element not found');
}

const root = createRoot(element);

root.render(
  (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  ) as React.ReactElement<typeof App>,
);
