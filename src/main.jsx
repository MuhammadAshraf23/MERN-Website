import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Redux Provider
import store from './store'; // Import your Redux store
import App from './App.jsx';
import './index.css';
import DataProvider from './context/DataProvider.jsx'; // Your existing context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
      <DataProvider>        
        <App />
      </DataProvider>
    </Provider>
  </StrictMode>
);
