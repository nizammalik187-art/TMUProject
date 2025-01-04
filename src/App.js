import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from "./Home";
import Service from "./components/Service";
import Footer from "./components/Footer";
import MyCRright from "./components/MyCRright";
import Bikes from "./components/Bikes";
import AboutUs from "./components/AboutUs";
import Appointment from "./components/Appointment";
import StaticButtons from "./StaticButtons";
import TopButton from "./components/TopButton";
import NotFound from "./components/NotFound";
import BikeList from "./components/BikeList";
import LoginPage from "./components/LoginPage";
import CreateBike from "./components/CreateBike";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import EditBike from "./components/EditBike";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component
import { Helmet } from 'react-helmet';

function App() {
  const isLoggedIn = localStorage.getItem('auth') === 'yes';
  
  return (
    <>
      {/* Global Meta Tags */}
      <Helmet>
        <meta name="description" content="Rent bikes in Uttarakhand for scenic rides. Visit Nainital, Bhimtal, and Haldwani for affordable bike rentals!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="bike rental, scooty rental, Uttarakhand, Nainital, Bhimtal, Haldwani" />
        <meta name="author" content="Uttarakhand Bike Rentals" />
        <title>Uttarakhand Bike Rentals</title>
      </Helmet>

      <Header id='top' />
      <Navbar />
      {!isLoggedIn ? <StaticButtons /> : ""}

      <div className="main-content">
        <ScrollToTop /> {/* Include ScrollToTop component */}
        <Routes>
          {!isLoggedIn ? 
            <>
              <Route path="/services" element={<Service />} />
              <Route path="/contact" element={<Appointment />} />
              <Route path="/about" element={<AboutUs />} />
            </>
          : ""}

          <Route path="/" element={<Home />} />
          <Route path="/createBike" element={<CreateBike />} />
          <Route path="/editBike/:id" element={<EditBike />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Protect the bikeList route */}
          <Route
            path="/bikeList"
            element={
              <ProtectedRoute>
                <BikeList />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <MyCRright />
      <TopButton />
    </>
  );
}

export default App;
