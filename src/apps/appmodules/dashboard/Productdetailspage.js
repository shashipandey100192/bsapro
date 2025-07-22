import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Productdetailspage() {
    const {id} = useParams();
    const [a,b]=useState()

const [item, updateitem] = useState({})

    const myapi = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
            console.log(d.data);
            updateitem(d.data);
            
        })
    }

useEffect(()=>{
    myapi();
},[]);

const addtocard = (id)=>{
    console.log(id);
    b("false");
    

}


  return (
    <div className='container-fluid mt-3'>
        <div className='row'>
            <div className='col-md-4 border'>
                <img src={item.thumbnail} alt={item.id}/>
            </div>
            <div className='col-md-8 border p-3'>
                <Link to="/landingpage/productlist" className='btn btn-primary float-end'>Back</Link>
                <p className='h4'> Title: {item.title}</p>
                <hr/>
               <p className='h3'>Brand: {item.brand}</p>
               <p className='h4'>Category: {item.category}</p>
               <p><b>Description: -</b> {item.description}</p>
               <p className='h1'>Price: <del className='text-secondary'> {item.price}</del> <span className='text-success'>{item.price*90/100}</span></p>
               <p className='text-white bg-danger p-1'>{item.returnPolicy}</p>
               <span className='h1 bg-success p-2 rounded'> Avail Stock Items: {item.stock}</span>
               <p className='mt-3'>{item.rating}</p>
               <p>{item.weight}</p>
               <button className='btn btn-primary' onClick={()=>addtocard(item.id)} disabled={a}> add to Card</button>
               
            </div>
        </div>
    </div>
  )
}

export default Productdetailspage