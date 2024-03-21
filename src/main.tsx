// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Check if the root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Couldn't find the root element.");
}

// Create a root ReactDOM
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root ReactDOM in strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
