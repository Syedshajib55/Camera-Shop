import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const ManageAllOrders = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then( res => res.json())
        .then(data => setServices(data));
    }, [])
    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( data =>{
           if(data.deletedCount){
            alert('Are You Sure to Delete?');
            const remaining = services.filter( service => service.id !== id);
            setServices(remaining);
           }
        })
    }
    return (
        <div>
            <div>
        <Header></Header>
      </div>
            <h3 className='text-primary my-5'>All Users Services</h3>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                        <button onClick={ ()=> handleDelete(service._id)} className='btn btn-danger mb-5'>Delete</button>
                    </div>)
            }
            <div>
        <Footer></Footer>
      </div>
        </div>
    );
};

export default ManageAllOrders;