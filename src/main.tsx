import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import "./styles/index.css";

const loader = document.getElementById("loader");
if (loader) {
  loader.style.opacity = "0";
  loader.style.pointerEvents = "none";
  setTimeout(() => loader.remove(), 300);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
