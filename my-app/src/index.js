import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
      //loogelised sulud impordi juures tähendavad, et ei võeta kõike kaasa 
      //kust imporditakse
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

