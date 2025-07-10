import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./apps/css/style.css";
import Welcomepage from './apps/Welcomefile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Welcomepage></Welcomepage>


  </React.StrictMode>
);


