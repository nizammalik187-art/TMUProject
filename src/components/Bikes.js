import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Bikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/bikes');
        console.log(response.data)

        setBikes(response.data);

      } catch (err) {
        console.log("Error:", err)
      }
    }
    fetchBike();
  }, []);


  return (
    <div class="container-fluid service py-5">
      <div class="container py-5">
        <div class="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div class="sub-style">
            <h4 class="sub-title px-3 mb-0">Available Bikes</h4>
          </div>
          {/* <h1 class="display-3 mb-4">Our Service Provide cars and bikes on rent.</h1>
          <p class="mb-0">Explore the city on two wheels with our top-notch bike rentals.
            Whether you're a local or a visitor, our bikes are perfect for discovering new places and enjoying the ride.
            Choose from a variety of models and experience the freedom of cycling!</p> */}
        </div>
        <div class="row g-4 justify-content-center">
          {bikes.map((bike) => (
            <div key={bike._id} class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div class="bike-card rounded">
                <div class="bike-img rounded-top">
                  <img src={`http://localhost:8090/uploads/${bike.bikeImage}`} class="img-fluid rounded-top w-100" alt="Hero Honda Bike" />
                </div>
                <div class="bike-content rounded-bottom bg-light p-4">
                  <div class="bike-content-inner">
                    <h5 class="mb-4">{bike.bikeName}</h5>
                    <p class="mb-4">{bike.bikeDescription}</p>
                    <p class="mb-2"><strong>Price:</strong> {bike.bikePrice}/day</p>
                    <p class="mb-4"><strong>Location:</strong> Nainital</p>
                    <a href="#" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Rent Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="bike-card rounded">
              <div class="bike-img rounded-top">
                <img src="img/service-2.jpg" class="img-fluid rounded-top w-100" alt="Hero Honda Bike" />
              </div>
              <div class="bike-content rounded-bottom bg-light p-4">
                <div class="bike-content-inner">
                  <h5 class="mb-4">Hero Honda</h5>
                  <p class="mb-4">A reliable bike for all your city rides. Perfect for daily commutes and short trips.</p>
                  <p class="mb-2"><strong>Price:</strong> ₹500/day</p>
                  <p class="mb-4"><strong>Location:</strong> Nainital</p>
                  <a href="#" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Rent Now</a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="bike-card rounded">
              <div class="bike-img rounded-top">
                <img src="img/service-3.jpg" class="img-fluid rounded-top w-100" alt="Hero Honda Bike" />
              </div>
              <div class="bike-content rounded-bottom bg-light p-4">
                <div class="bike-content-inner">
                  <h5 class="mb-4">Hero Honda</h5>
                  <p class="mb-4">A reliable bike for all your city rides. Perfect for daily commutes and short trips.</p>
                  <p class="mb-2"><strong>Price:</strong> ₹500/day</p>
                  <p class="mb-4"><strong>Location:</strong> Nainital</p>
                  <a href="#" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Rent Now</a>
                </div>
              </div>
            </div>
          </div> */}



          {/* <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
            <a class="btn btn-primary rounded-pill text-white py-3 px-5" href="#">View More Bikes</a>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Bikes
