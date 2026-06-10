import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Initialize theme early to prevent flash of wrong theme.
// Default is dark (no class). Light mode adds 'light' class.
try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.documentElement.classList.add('light');
    }
} catch (e) {
    // ignore (e.g., SSR or privacy settings)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
