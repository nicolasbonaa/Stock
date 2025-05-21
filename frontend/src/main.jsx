// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Envolvendo o App com o Router para habilitar Link/Route */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
