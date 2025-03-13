import React from 'react'

const Carousel = () => {
  return (
    <div class="header-carousel owl-carousel">
      <div class="header-carousel-item">
        <img src="img/carousel-1.jpg" class="img-fluid w-100" alt="Wide range of premium bikes available for rent at competitive prices" />
        <div class="carousel-caption">
          <div class="carousel-caption-content p-3">
            <h5 class="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }} >Physiotherapy Center</h5>
            <h1 class="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
            <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <a class="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
          </div>
        </div>
      </div>
      <div class="header-carousel-item">
        <img src="img/carousel-2.jpg" class="img-fluid w-100" alt="Wide range of premium bikes available for rent at competitive prices" />
        <div class="carousel-caption">
          <div class="carousel-caption-content p-3">
            <h5 class="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Physiotherapy Center</h5>
            <h1 class="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
            <p class="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <a class="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
