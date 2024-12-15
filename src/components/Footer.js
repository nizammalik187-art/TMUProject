import React from 'react'

const Footer = () => {
  return (
    <div class="container-fluid footer py-4 wow fadeIn" data-wow-delay="0.2s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
              <h4 class="text-white mb-4"><i class="fas fa-star-of-life me-3"></i>UKBR</h4>
              <p>Discover the beauty of Uttarakhand with our bike rental service</p>
              <div class="d-flex align-items-center">
                <i class="fas fa-share fa-2x text-white me-2"></i>
                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
              <h4 class="mb-4 text-white">Quick Links</h4>
              <a href=""><i class="fas fa-angle-right me-2"></i> About Us</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Contact Us</a>
            
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
              <h4 class="mb-4 text-white">UKBR</h4>
              <a href=""><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
              <a href=""><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
            
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
              <h4 class="mb-4 text-white">Contact Info</h4>
              <a href=""><i class="fa fa-map-marker-alt me-2"></i> Kathgodam, Haldwani, Uttarakhand</a>
              <a href=""><i class="fas fa-envelope me-2"></i> info@example.com</a>
              <a href=""><i class="fas fa-envelope me-2"></i> info@example.com</a>
              <a href=""><i class="fas fa-phone me-2"></i> +91 9389691797</a>
              <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +91 9389691797</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
