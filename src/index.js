import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import "animate.css";
import { PortafolioApp } from './PortafolioApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortafolioApp />
  </React.StrictMode>
);