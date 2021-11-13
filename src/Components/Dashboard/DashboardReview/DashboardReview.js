import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth/useAuth';
const DashboardReview = () => {
    const{user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://powerful-taiga-38697.herokuapp.com/reviews', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        
        <div className = "add-service">
            
        <h2>Please Give a Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />
            <textarea {...register("review")}placeholder="Review" />
            <input type="number" {...register("rating")} placeholder="Rating 0 to 5" />
            <input className="btn-primary" type="submit" />
        </form>
    </div>
    );
};

export default DashboardReview;