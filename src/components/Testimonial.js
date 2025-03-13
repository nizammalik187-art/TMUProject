import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './Testimonial.css'; // Import custom styles

const options = {
  loop: true,
  margin: 10,
  nav: true,
  dots: false, // Disable dots if using custom navigation buttons
  autoplay: true,
  autoplayTimeout: 5000,
  navText: [
    "<span class='carousel-control-prev-icon'>&lsaquo;</span>",
    "<span class='carousel-control-next-icon'>&rsaquo;</span>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const Testimonial = () => {
  return (
    <div className="container-fluid testimonial py-5 wow zoomInDown" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title mb-5">
          <div className="sub-style">
            <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
          </div>
          <h1 className="display-3 mb-4">What Clients are Saying</h1>
        </div>
        <OwlCarousel className="testimonial-carousel owl-carousel" {...options}>
          <div className="testimonial-item">
            <div className="testimonial-inner p-5">
              <div className="testimonial-inner-img mb-4">
                <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="Wide range of premium bikes available for rent at competitive prices" />
              </div>
              <p className="text-white fs-7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
              </p>
              <div className="text-center">
                <h5 className="mb-2">John Abraham</h5>
                <p className="mb-2 text-white-50">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-inner p-5">
              <div className="testimonial-inner-img mb-4">
                <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="Wide range of premium bikes available for rent at competitive prices" />
              </div>
              <p className="text-white fs-7">
                Best bike in whole world
              </p>
              <div className="text-center">
                <h5 className="mb-2">Ajeet Kumar Gupta</h5>
                <p className="mb-2 text-white-50">Rurdra Pur</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                  <i className="fas fa-star text-secondary"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat for more testimonials */}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
