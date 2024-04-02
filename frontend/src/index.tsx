// module
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// components
import UserContext from './context/UserContext';
import App from './App';
import './assets/style/index.css';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <UserContext>
        <App />
      </UserContext>
    </BrowserRouter>
  );
