import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function Userlogin() {
    const mynav = useNavigate();

const [email,emailupdate]=useState("");
const [pass, passupdate]=useState("");

const updateemail = (e)=>{
    console.log(e.target.value);
    emailupdate(e.target.value);
}

const updatepass  = (p)=>{
    passupdate(p.target.value);
}


const formvalidation = ()=>{
    if(email==="" || pass==="")
    {
        // alert("email and password is blank");
        toast.error("email and password is blank",{autoClose: 2000,theme: "dark"});
    }
    else
    {
        if(email==="admin" && pass==="1234")
        {
            // alert("welcome");
            toast.success("login successfully",{autoClose: 2000,theme: "dark"});
            // mynav("/landingpage");    
            setInterval(()=>{
                mynav("/landingpage");
            },2000)
        }
        else
        {
            // alert("email and password don't match");
            toast.warning("email and password don't match",{autoClose: 2000,theme: "dark"});
        }
    }
}



    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h1> <FaUserCircle /></h1>
                                <p className='h3 mb-5'>User Login Page</p>

                                <ToastContainer position="top-center"/>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label"><MdOutlineEmail /> Email address</label>
                                    <input type="email" class="form-control" value={email} onInput={updateemail}/>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label"><TbLockPassword /> Password</label>
                                    <input type="password" class="form-control" value={pass} onInput={updatepass}/>
                                </div>
                            </div>

                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                    <button type="button" class="btn btn-success" onClick={formvalidation}>Logoin <RiLoginCircleFill /></button>
                                    <Link to="/registor" className='ms-5'>New Registor</Link>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Userlogin