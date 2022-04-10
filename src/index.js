import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const app = (
  <StrictMode>
      <App />
  </StrictMode>
);

root.render(app);

reportWebVitals();
