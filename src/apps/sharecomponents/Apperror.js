import React from 'react'
import { Link } from 'react-router-dom'

function Apperror() {
  return (
    <div className='container-fluid bg-danger text-white' style={{height:"100vh"}}>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1 style={{fontSize:200}}>404</h1>
                <h1>Page Not Found</h1>
                <Link to="/userportal" className="btn btn-success">Back to Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Apperror