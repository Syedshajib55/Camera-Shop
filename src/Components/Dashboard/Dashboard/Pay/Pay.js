import React from 'react';
import { Link } from 'react-router-dom';

const Pay = () => {
    const handlePay = (e) => {
        e.preventDefault();
    }
    return (
        <div>
           {/* <Link> <button onClick={handlePay}>Pay</button> </Link>   */}
            <p><h3>Paying System</h3> Coming Soon</p>
        </div>
    );
};

export default Pay; 