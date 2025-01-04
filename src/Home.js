import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderCarousel from './components/HeaderCarousel';
import Service from './components/Service';
import AboutUs from './components/AboutUs';
import Feature from './components/Feature';
import Appointment from './components/Appointment';
import ModelVideo from './components/ModelVideo';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Advertisement from './components/Advertisement';

function Home() {
  return (
    <div className="App">
      {/* Page-specific Meta Tags */}
      <Helmet>
        <title>Explore Uttarakhand with Bike Rentals - Uttarakhand Bike Rentals</title>
        <meta name="description" content="Rent bikes and scooters easily in Uttarakhand. Explore Nainital, Bhimtal, and Haldwani with our rental services." />
        <meta name="keywords" content="Uttarakhand bike rentals, Bike for Nainital, Bike for Bhimtal, Bike in Haldwani, bike rental services" />
      </Helmet>

      <HeaderCarousel />
      <Advertisement />
      <Service />
      <AboutUs />
      <Appointment />
      <ModelVideo />
      <Testimonial />
      <Feature />
      <Blog />
    </div>
  );
}

export default Home;
