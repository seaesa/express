// module
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// components
import App from './App';
import './assets/style/index.css';
import UserContext from './context/UserContext';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <UserContext>
        <App />
      </UserContext>
    </BrowserRouter>
  );
