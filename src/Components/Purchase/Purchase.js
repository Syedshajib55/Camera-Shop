import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './Purchase.css'
import useAuth from '../../Hooks/useAuth/useAuth';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {serviceId } = useParams();
    const [service, setService] = useState({});
    const {user} = useAuth();

    const handlePurchase = e =>{
        e.preventDefault();
        console.log('you clicked');
        
    }
    useEffect(()=>{
        fetch(`https://powerful-taiga-38697.herokuapp.com/services/${serviceId}`)
        .then( res => res.json())
        .then(data => setService(data));
    }, [serviceId])
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <h2 className='mt-5 ms-5 me-5 text-primary'>{service.name} and Get extra <span>25%</span> Discount </h2>
            <img src={service.img} alt="" />
            <h4>Price : {service.price}$</h4>
            <h3 className='m-2'>Details of {service.name} : </h3>
            <p className='mt-3 ms-5 me-5 p-2'>{service.description}</p>
            
            <form className="shipping-form p-5"
            // onSubmit={handlePurchase(onSubmit)}
             >
                <h3 className='text-primary'>Fiil Up the Form To Checkout</h3>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
                <button className="btn btn-primary">Purchase</button> 
            </form>
            <div>
                <Footer></Footer>
            </div>  
       </div>
    );
};

export default Purchase;