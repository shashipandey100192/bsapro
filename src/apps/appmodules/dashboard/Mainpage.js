import React, { Fragment } from 'react'
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
                    <h1>sidebar</h1>
                </div>

                </div>
            </div>


   </Fragment>
  )
}

export default Mainpage