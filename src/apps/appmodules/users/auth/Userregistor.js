import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Userregistor() {
  return (
    <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 bg-light shadow p-5'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 text-center'>
                                    <h1> <FaUserCircle /></h1>
                                    <p className='h3 mb-5'>User Registor Page</p>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"><MdOutlineEmail /> Email address</label>
                                        <input type="email" class="form-control" />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> Full Name</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> Phone</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> Gender</label>
                                        <select className='form-select'>
                                            <option hidden>select gender</option>
                                            <option>male</option>
                                            <option>female</option>
                                        </select>
                                    </div>
                                </div>

                                 <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> State</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>



    
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"><TbLockPassword /> Password</label>
                                        <input type="password" class="form-control" />
                                    </div>
                                </div>
    
                                <div className='col-md-12 text-center'>
                                    <div class="mb-3">
                                        <button type="button" class="btn btn-success">Registor Now <RiLoginCircleFill /></button>
                                        <Link to="/userportal" className='ms-5'>Login</Link>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
    
                    </div>
                </div>
            </div>
  )
}

export default Userregistor