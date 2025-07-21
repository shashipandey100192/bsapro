import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Appheader from '../../sharecomponents/Appheader'
import Appsidebar from '../../sharecomponents/Appsidebar'


function Mainpage() {
  return (
   <Fragment>
            <Appheader></Appheader>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 border'>
                    <Appsidebar></Appsidebar>
                </div>
                <div className='col-md-10 border'>
                    <Outlet></Outlet>
                </div>

                </div>
            </div>


   </Fragment>
  )
}

export default Mainpage