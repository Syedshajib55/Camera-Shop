import React from 'react';
import './Home.css'
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Videos from '../Videos/Videos';
import Reviews from '../Reviews/Reviews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
      <>
      <div>
        <Header></Header>
      </div>
      <div>
         <Banner></Banner>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
      <div>
        <Videos></Videos>
      </div>
      <div>
        <Footer></Footer>
      </div>
     
  </>
    );
};

export default Home;