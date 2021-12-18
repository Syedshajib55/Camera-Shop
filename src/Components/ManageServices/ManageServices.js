import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('https://powerful-taiga-38697.herokuapp.com/services')
        .then( res => res.json())
        .then(data => setServices(data));
    }, [])
    const handleDelete = id =>{
        const url = `https://powerful-taiga-38697.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( data =>{
           if(data.deletedCount){
            alert('Are You Sure to Delete?');
            const remaining = services.filter( service => service._id !== id);
            setServices(remaining);
           }
        })
    }
    return (
        <div>
            <h3 className='text-primary my-5'>Manage My Orders.</h3>
            {
                services.slice(3,5)?.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <img className="mt-3" src={service.img} alt="" />
                    <h3>Price : {service.price}$</h3>
                        <button onClick={ ()=> handleDelete(service._id)} className='btn btn-danger mb-5'>Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;