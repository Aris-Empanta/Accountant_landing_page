import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <HashRouter>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </HashRouter>
);

