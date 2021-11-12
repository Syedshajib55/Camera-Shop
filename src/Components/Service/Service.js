import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;
    return (
        <div className="service pb-3 border rounded border-success">
            <h4 className="ms-5 me-5 mt-3">{name}</h4>
            <img className="mt-2" src={img} alt="" />
            <p className="px-5 mx-5">{description.slice(0,200)}...</p>
            <Link to={`/Purchase/${_id}`}>
                <button className="btn btn-warning">Buy Now</button>
            </Link>
        </div>
    );
};

export default Service;