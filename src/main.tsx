import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Ensure this line is included to apply Tailwind's styles

const root = document.getElementById('root');
if (root !== null) {  // Ensure the root element is not null
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!');
}
