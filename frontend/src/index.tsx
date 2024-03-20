import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style/index.css';
import ThemeProvider from './context/UserContext';
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);