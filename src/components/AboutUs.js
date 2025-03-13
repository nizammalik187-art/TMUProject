import React from 'react'

const AboutUs = () => {
  return (
    <div class="container-fluid about bg-light py-5">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div class="about-img pb-5 ps-5">
              <img src="img/about-1.jpg" class="img-fluid rounded w-100" style={{ objectFit: 'cover' }} alt="Premium rental bike parked on a scenic road, available for hire" />
              <div class="about-img-inner">
                {/* <img src="img/about-1.jpg" class="img-fluid rounded-circle w-100 h-100" alt="Image" /> */}
              </div>
              <div class="about-experience">15 years experience</div>
            </div>
          </div>
          <div class="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
            <div class="section-title text-start mb-5">
              <h4 class="sub-title pe-3 mb-0">About Us</h4>
              <h1 class="display-3 mb-4">We are Ready to Help Improve Your Trip.</h1>
              <p class="mb-4">Explore the city on two wheels with our top-notch bike rentals.
                Whether you're a local or a visitor, our bikes are perfect for discovering new places
                and enjoying the ride. Choose from a variety of models and experience the freedom of cycling!</p>
              <div class="mb-4">
                <p class="text-secondary"><i class="fa fa-check text-primary me-2"></i> Refresing to get any trouble in trip.</p>
                <p class="text-secondary"><i class="fa fa-check text-primary me-2"></i> We Provide Only new bike .</p>
                <p class="text-secondary"><i class="fa fa-check text-primary me-2"></i> You can go anywhere </p>
              </div>
              {/* <a href="/" class="btn btn-primary rounded-pill text-white py-3 px-5">Discover More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
