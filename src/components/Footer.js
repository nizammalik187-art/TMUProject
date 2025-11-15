import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid footer py-3 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-3"><i className="fas fa-star-of-life me-3"></i>UKBR</h4>
              <p>Discover the beauty of Uttarakhand with our bike rental service</p>
              <div className="d-flex align-items-center">
                <i className="fas fa-share fa-2x text-white me-2"></i>
                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-3 text-white">Quick Links</h4>
              {/* <a href=""></i> About Us</a> */}
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>

            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-3 text-white">UKBR</h4>
              <a href=""><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
              <a href=""><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-3 text-white">Contact Info</h4>
              <a href=""><i className="fa fa-map-marker-alt me-2"></i>Haldwani,Uttarakhand</a>
              <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a>
              <a href=""><i className="fas fa-phone me-2"></i> +91 9634583400</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
