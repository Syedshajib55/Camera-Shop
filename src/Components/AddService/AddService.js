import React from 'react';
import axios from 'axios';
import './AddService.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://powerful-taiga-38697.herokuapp.com/services', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Added Successfully');
                reset();
            }
        })
    }
    return (
        <div className = "add-service">
            <div>
        <Header></Header>
      </div>
            <h2>Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder="Name" />
                <textarea {...register("description")}placeholder="Description" />
                <input {...register("img")} placeholder="img URL" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input className="btn-primary" type="submit" />
            </form>
            <div>
        <Footer></Footer>
      </div>
        </div>
    );
};

export default AddService;