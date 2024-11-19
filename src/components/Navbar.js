import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <NavLink to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0" style={{ fontSize: 'x-large' }}>
            <i className="fas fa-star-of-life me-3"></i>UKBR
          </h1>
          {/* <img src="img/logo.png" alt="Logo" /> */}
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
            <NavLink to="/createBike" className="nav-item nav-link">Create Bike</NavLink>
            <NavLink to="/bikes" className="nav-item nav-link">Bikes</NavLink>
            {/* <NavLink to="/addReview" className="nav-item nav-link">Add Review</NavLink> */}
            <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
          </div>
          <NavLink to="bikes" type='button' className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Book Your Bike</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
