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

function App() {
  return (
    <>
      <Header id='top' />
      <Navbar />
      <StaticButtons />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/createBike" element={<CreateBike />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Appointment />} />
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
