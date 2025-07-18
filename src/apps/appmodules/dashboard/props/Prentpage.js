import React from 'react'
import Childpage from './Childpage'

function Prentpage() {
    const name="ravi singh";
    const msg =()=>{
        alert("pass data from parent to child in react js using props");
    } 
  return (
    <div className='border p-5 bg-warning'>
        <h1>this is parent page  {name}</h1>

        <Childpage sname={name} mymsg = {msg}></Childpage>

    </div>
  )
}

export default Prentpage