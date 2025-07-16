import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Userregistor() {

 const {register,handleSubmit,formState: { errors }} = useForm()

const mysubmit = (myformdata)=>{
        console.log(myformdata);
}



  return (
    <form onSubmit={handleSubmit(mysubmit)}>
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
                                        <input type="email" class="form-control"{...register("email")} />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> Full Name</label>
                                        <input type="text" class="form-control" {...register("fullname",{required:true})}/>
                                        {errors.fullname && <p className='text-danger'>fullname is required</p>}
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> Phone</label>
                                        <input type="text" class="form-control" {...register("phone")}/>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> Gender</label>
                                        <select className='form-select' {...register("gender")}>
                                            <option hidden>select gender</option>
                                            <option>male</option>
                                            <option>female</option>
                                        </select>
                                    </div>
                                </div>

                                 <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"> State</label>
                                        <input type="text" class="form-control" {...register("state")}/>
                                    </div>
                                </div>
    
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label"><TbLockPassword /> Password</label>
                                        <input type="password" class="form-control" {...register("pass",{required:true,minLength:5,maxLength:8})}/>
                                        {errors.pass?.type==='required' && <p className='text-danger'>password is required</p>}
                                        {errors.pass?.type==='minLength' && <p className='text-warning bg-danger'>minimum 5  charector required</p>}
                                        {errors.pass?.type==='maxLength' && <p className='text-success bg-light'>maximum 8  charector required</p>}
                                    </div>
                                </div>
    
                                <div className='col-md-12 text-center'>
                                    <div class="mb-3">
                                        <button type="submit" class="btn btn-success">Registor Now <RiLoginCircleFill /></button>
                                        <Link to="/userportal" className='ms-5'>Login</Link>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
    
                    </div>
                </div>
            </div>
            </form>
  )
}

export default Userregistor