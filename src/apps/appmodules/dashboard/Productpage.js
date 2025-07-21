import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Productpage() {

    const [item, updateitem] = useState([])

    const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            updateitem(d.data.products);
        })
    }

    useEffect(() => {
        myapi();
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                {item.map((c) => {
                    return (
                        <div className='col-md-3 mt-2'>
                            <div class="card shadow">
                                <img src={c.thumbnail} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{c.title}</h5>
                                    <p class="card-text">{c.description}</p>
                                    <Link to={`detailspage/` + c.id} class="btn btn-primary">View more</Link>

                                </div>
                            </div>
                        </div>
                    )
                })}



            </div>
        </div>


    )
}

export default Productpage