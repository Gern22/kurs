// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Обновите импорт
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
    <Router>
        <App />
    </Router>
);