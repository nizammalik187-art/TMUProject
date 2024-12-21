import './App.css';
// import Spinner from './components/Spinner';
import React, { useState, useEffect } from 'react';
import HeaderCarousel from './components/HeaderCarousel'

import Service from './components/Service';
import AboutUs from './components/AboutUs';
import Feature from './components/Feature';
import Appointment from './components/Appointment';
import ModelVideo from './components/ModelVideo';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
// import Footer from './components/Footer';
import Team from './components/Team';
// import MyCRright from './components/MyCRright';
import Bikes from './components/Bikes';
import Advertisement from './components/Advertisement';


function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {/* {loading ? <Spinner /> : ""} */}
      <HeaderCarousel />
      <Advertisement/>
      <Bikes />
      <Service />
      <AboutUs />
      <Appointment />
      <ModelVideo />
      {/* <Team /> */}
      <Testimonial />
      <Feature />

      {/* <Blog /> */}
     




    </div>
  );
}

export default Home;
