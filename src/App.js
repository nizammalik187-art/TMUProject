import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from "./Home";
import CreateBike from "./components/CreateBike";
import Service from "./components/Service";
import Footer from "./components/Footer";
import MyCRright from "./components/MyCRright";
import Bikes from "./components/Bikes";
import AboutUs from "./components/AboutUs";
import Appointment from "./components/Appointment";
import StaticButtons from "./StaticButtons";

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <StaticButtons/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBike" element={<CreateBike />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Appointment />} />
      </Routes>
      <Footer />
      <MyCRright />
      <a href="/hi" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>

    </>
  );
}

export default App;
