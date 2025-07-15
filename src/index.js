import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./apps/css/style.css";
import Welcomepage from './apps/Welcomefile';
import Userlogin from './apps/appmodules/users/auth/Userlogin';
import Userregistor from './apps/appmodules/users/auth/Userregistor';
import Apperror from './apps/sharecomponents/Apperror';
import Mainpage from './apps/appmodules/dashboard/Mainpage';
import Homepage from './apps/appmodules/dashboard/Homepage';
import Productpage from './apps/appmodules/dashboard/Productpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Routes>
          <Route path='' element={<Welcomepage/>}></Route>
          <Route path='userportal' element={<Userlogin/>}></Route>
          <Route path='registor' element={<Userregistor/>}></Route>
          <Route path='landingpage' element={<Mainpage/>}>
              <Route path='' element={<Homepage/>}></Route>
              <Route path='productlist' element={<Productpage/>}></Route>
          </Route>


          <Route path='*' element={<Apperror/>}></Route>
        
        </Routes>
      </BrowserRouter>


  </React.StrictMode>
);


