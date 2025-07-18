import React from 'react'

function Childpage(props) {
  return (
    <div className='border shadow bg-info text-white p-5'>
        <h3>Childpage</h3>
        <h4>{props.sname}</h4>
        <input type='button' value="show message" onClick={props.mymsg} className='btn btn-primary'/>

        </div>
  )
}

export default Childpage