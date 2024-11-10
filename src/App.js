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
import TopButton from "./components/TopButton";
import NotFound from "./components/NotFound";

function App() {

  return (
    <>
      <Header id='top' />
      <Navbar />
      <StaticButtons/>
      <div className="main-content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/createBike" element={<CreateBike />} />
    <Route path="/services" element={<Service />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/bikes" element={<Bikes />} />
    <Route path="/contact" element={<Appointment />} />
    <Route path="*" element={<NotFound />} />

  </Routes>
  {/* <Route path="*" element={<NotFound />} /> */}

</div>

      <Footer />
      <MyCRright />
   <TopButton/>

    </>
  );
}

export default App;
