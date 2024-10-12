import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './HeaderCarousel.css'; // Import custom styles

const options = {
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  navText: [
    "<button class='owl-prev'><span class='carousel-control-prev-icon'></span></button>",
    "<button class='owl-next'><span class='carousel-control-next-icon'></span></button>",
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

const HeaderCarousel = () => {
  return (
    <OwlCarousel className="header-carousel owl-carousel" {...options}>
      <div className="header-carousel-item">
        <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: '3px' }}
            >
              Bike Hub
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4 cTextSize">
              Best Solution For Rent a Bike
            </h1>
            <p className="mb-5 fs-5">
              Your next great ride starts here – explore with our top-notch bike rentals,
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/"
            >
              Book Your Bike
            </a>
          </div>
        </div>
      </div>
      <div className="header-carousel-item">
        <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: '3px' }}
            >
              Bike Hub
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4 cTextSize">
              Best Solution For Rent a bike
            </h1>
            <p className="mb-5 fs-5">
              From city streets to scenic trails – we have the perfect bike for every path,
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="header-carousel-item">
        <img src="img/carousel-3.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: '3px' }}
            >
              Bike Hub
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4 cTextSize">
              Best Solution For Rent a bike
            </h1>
            <p className="mb-5 fs-5">
              From city streets to scenic trails – we have the perfect bike for every path,
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div> <div className="header-carousel-item">
        <img src="img/carousel-4.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: '3px' }}
            >
              Bike Hub
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4 cTextSize" >
              Best Solution For Rent a bike
            </h1>
            <p className="mb-5 fs-5">
              From city streets to scenic trails – we have the perfect bike for every path,
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div> <div className="header-carousel-item">
        <img src="img/carousel-5.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: '3px' }}
            >
              Bike Hub
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4 cTextSize">
              Best Solution For Rent a bike
            </h1>
            <p className="mb-5 fs-5">
              From city streets to scenic trails – we have the perfect bike for every path,
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default HeaderCarousel;
