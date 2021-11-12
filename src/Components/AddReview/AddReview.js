import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const AddReview = () => {
    const{user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('http://localhost:5000/reviews', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        
        <div className = "add-service">
            <div>
        <Header></Header>
      </div>
        <h2>Please Give a Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />
            <textarea {...register("review")}placeholder="Review" />
            <input type="number" {...register("rating")} placeholder="Rating" />
            <input className="btn-primary" type="submit" />
        </form>
        <div>
        <Footer></Footer>
      </div>
    </div>
    );
};

export default AddReview;