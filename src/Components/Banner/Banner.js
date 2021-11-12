import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from './1641.jpg'
import slider2 from './professional-camera-blurred_169016-10249.jpg'
import slider3 from './top-view-photography-accesories-with-copy-space_23-2148363427.jpg'

const Banner = () => {
    return (
        <div>
             <Carousel className="carousel">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider1}
                      alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider2}
                      alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider3}
                      alt="First slide"
                  />
              </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default Banner;