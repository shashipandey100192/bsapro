import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Mychartpage() {

    const [item, updateitem] = useState([]);
    const [sb,usb]=useState([]);
    const [df,udf]=useState([]);

    const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            updateitem(d.data.products);
            console.log(d.data.products);
            udf(d.data.products);


            const searchby = d.data.products.map((s)=>{
                return s.category
            });
            const uniquedata = [...new Set(searchby)];
            usb(uniquedata);

        })
    }

    useEffect(() => {
        myapi();
    }, [])


    const selectopt = (e)=>{
        console.log(e.target.value);
        const fdata = df.filter((d)=>{
            return d.category===e.target.value
        });
        updateitem(fdata);
    }

    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card text-bg-primary mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Products</h5>
                            <h1>{item.length}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-warning mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Products</h5>
                            <h1>{item.length}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-info mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Products</h5>
                            <h1>{item.length}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-danger mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Products</h5>
                            <h1>{item.length}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    Search By: <select className='form-select' onChange={selectopt}>
                                <option hidden>search by</option>
                                {sb.map((lst)=>{
                                    return <option>{lst}</option>
                                })}
                    </select>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12' style={{ height: '80vh' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={item}>
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="price" fill="#fc491cff" />
                            <Bar dataKey="stock" fill="#1dff74ff"/>
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    )
}

export default Mychartpage