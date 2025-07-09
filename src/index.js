import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcomepage, { Projecttitle1 } from './apps/Welcomefile';
import "./apps/css/style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Welcomepage></Welcomepage>
<Projecttitle1></Projecttitle1>

  </React.StrictMode>
);


