import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5 pb-2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-start">
                        <h5 className='mb-4'>Contact us</h5>
                        <p>Mirpur Road, 1203, Dhaka</p>
                        <p>+88017666666</p>
                        <p>help@CameraShop.com</p>
                    </div>
                    <div className="col-md-3 text-start">
                        <h5 className='ms-4'>Services</h5>
                        <ul className='help-list'>
                            <li> <a href="">Accessories</a></li>
                            <li> <a href="">Switcher</a></li>
                            <li> <a href="">Lighting & Studio</a></li>
                            <li> <a href="">Lens</a></li>
                            <li> <a href="">Camera Body</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-start">
                        <h5 className='ms-4'>Quick Link</h5>
                        <ul className='help-list'>
                            <li> <a href="">Action Camera</a></li>
                            <li> <a href="">Camera Lens</a></li>
                            <li> <a href="">DSLR Camera</a></li>
                            <li> <a href="">Microphone</a></li>
                            <li> <a href="">Video Camera</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-start">
                        <h5 className='ms-4'>Get In Touch</h5>
                        <ul className='help-list'>
                            <li> <a href="">About</a></li>
                            <li> <a href="">Contact</a></li>
                            <li> <a href="">Advertise on CameraShop</a></li>
                            <li> <a href="">FAQ</a></li>
                            <li> <a href="">Store Directory</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className='text-center'>CameraShop &copy; Syed Shakil Mahmud 2021 || All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;