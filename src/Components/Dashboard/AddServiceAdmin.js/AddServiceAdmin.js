import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddServiceAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://powerful-taiga-38697.herokuapp.com/services', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        <div className = "add-service">
            <h2>Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder="Name" />
                <textarea {...register("description")}placeholder="Description" />
                <input {...register("img")} placeholder="img URL" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input className="btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddServiceAdmin;