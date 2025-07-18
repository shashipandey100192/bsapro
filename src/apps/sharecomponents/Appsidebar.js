import React from 'react'
import { Link } from 'react-router-dom'

function Appsidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"> <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> <span className="fs-4">Sidebar</span> </Link> <hr /> <ul className="nav nav-pills flex-column mb-auto"> <li className="nav-item"> <Link to="#" className="nav-link active" aria-current="page">
      Home
    </Link> </li> <li> <Link to="dashboard" className="nav-link link-body-emphasis">
      Dashboard
    </Link> </li> <li> <Link to="mychart" className="nav-link link-body-emphasis">
      Charts
    </Link> </li>
      <li>
        <Link to="productlist" className="nav-link link-body-emphasis"> Products</Link>
      </li>
      <li> <Link to="#" className="nav-link link-body-emphasis">
        Customers
      </Link> </li> </ul> <hr /> <div className="dropdown"> <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> <strong>mdo</strong> </Link> <ul className="dropdown-menu text-small shadow"> <li><Link className="dropdown-item" to="#">New project...</Link></li> <li><Link className="dropdown-item" to="#">Settings</Link></li> <li><Link className="dropdown-item" to="#">Profile</Link></li> <li><hr className="dropdown-divider" /></li> <li><Link className="dropdown-item" to="#">Sign out</Link></li> </ul> </div> </div>
  )
}

export default Appsidebar