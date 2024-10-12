import React from 'react'

const Appointment = () => {
  return (
    <div class="container-fluid appointment py-5">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
            <div class="section-title text-start">
              <h4 class="sub-title pe-3 mb-0">Solutions To Your Trip</h4>
              <h4 >Best Quality Services With Minimal Rate</h4>
              <p class="mb-4">Explore the city on two wheels with our top-notch bike rentals. Whether you're a local or a visitor, our bikes are perfect for discovering new places and enjoying the ride. Choose from a variety of models and experience the freedom of cycling!</p>
              <div class="row g-4">
                <div class="col-sm-6">
                  <div class="d-flex flex-column h-100">
                    <div class="mb-4">
                      <h5 class="mb-3"><i class="fa fa-check text-primary me-2"></i> Bike</h5>
                      <p class="mb-0">Adventure is calling – answer with a bike rental that suits your style.”

                        “Cycle into convenience – easy rentals, unbeatable experiences.”

                        “Discover the joy of biking – exceptional rides for exceptional journeys.</p>
                    </div>
                    <div class="mb-4">
                      <h5 class="mb-3"><i class="fa fa-check text-primary me-2"></i> Scooty</h5>
                      <p class="mb-0">Adventure is calling – answer with a bike rental that suits your style.”

                        “Cycle into convenience – easy rentals, unbeatable experiences.”

                        “Discover the joy of biking – exceptional rides for exceptional journeys..</p>
                    </div>
                    <div class="text-start mb-4">
                      <a href="/" class="btn btn-primary rounded-pill text-white py-3 px-5">More Details</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="video h-100">
                    <img src="img/service-2.jpg" class="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt="" />
                    {/* <button type="button" class="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/watch?v=UbPeRsqEArI" data-bs-target="#videoModal">
                      <span></span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <div class="appointment-form rounded p-5">
              <p class="fs-4 text-uppercase text-primary">Get In Touch</p>
              <h1 class="display-5 mb-4">Contact Us</h1>
              <form>
                <div class="row gy-3 gx-4">
                  <div class="col-xl-6">
                    <input type="text" class="form-control py-3 border-primary bg-transparent text-white" placeholder="First Name" />
                  </div>
                  <div class="col-xl-6">
                    <input type="email" class="form-control py-3 border-primary bg-transparent text-white" placeholder="Email" />
                  </div>
                  <div class="col-xl-6">
                    <input type="phone" class="form-control py-3 border-primary bg-transparent" placeholder="Phone" />
                  </div>
                  <div class="col-xl-6">
                    <input type="City" class="form-control py-3 border-primary bg-transparent text-white" placeholder="City" />
                  </div>
                  <div class="col-xl-6">
                    <select class="form-select custom-select py-3 border-primary bg-transparent" aria-label="Default select example" >
                      <option selected>Your Gender</option>
                      <option value="1">Male</option>
                      <option value="2">FeMale</option>
                      <option value="3">Others</option>
                    </select>
                  </div>
                  <div class="col-xl-6">
                    <select class="form-select py-3 border-primary bg-transparent" aria-label="Default select example"  >
                      <option selected disabled hidden>Vehicle</option>
                      <option value="1">Bike</option>
                      <option value="2">Scooty</option>
                      <option value="3">Car</option>
                    </select>
                  </div>
                  <div class="col-xl-6">
                    <input type="date" class="form-control py-3 border-primary bg-transparent" />
                  </div>
                  <div class="col-xl-6">
                    <select class="form-select py-3 border-primary bg-transparent" aria-label="Default select example">
                      <option selected>city</option>
                      <option value="1">Haldwani</option>
                      <option value="2">Nanitaal</option>
                      <option value="2">RudraPur</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <textarea class="form-control border-primary bg-transparent text-white" name="text" id="area-text" cols="30" rows="5" placeholder="Write message"></textarea>
                  </div>
                  <div class="col-12">
                    <button type="button" class="btn btn-primary text-white w-100 py-3 px-5">SUBMIT NOW</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
