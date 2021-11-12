import React, { useEffect, useState } from 'react';
import ExploreSingle from '../ExploreSingle/ExploreSingle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Explore = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <div>
        <Header></Header>
      </div>
            <h2 className="text-primary my-5">Explore Products</h2>
            <div className="service-container">
                {
                    services.map(service => <ExploreSingle
                        key={service.id}
                        service={service}
                    ></ExploreSingle>)
                }
            </div>
            <div>
        <Footer></Footer>
      </div>
        </div>
    );
};

export default Explore;