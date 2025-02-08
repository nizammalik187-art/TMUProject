import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const response = await axios.get('https://nitinapi.onrender.com/api/bikes');
        setBikes(response.data);
      } catch (err) {
        console.log("Error:", err);
      }
    };
    fetchBike();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">Available Bikes</h4>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {bikes.map((bike) => (
            <div key={bike._id} className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bike-card rounded">
                <div className="bike-img rounded-top">
                  <img
                    src={bike.bikeImage}
                    className="img-fluid rounded-top w-100"
                    alt={bike.bikeName}
                  />
                </div>
                <div className="bike-content rounded-bottom bg-light p-4">
                  <div className="bike-content-inner">
                    <h5 className="mb-4">{bike.bikeName}</h5>
                    <p className="mb-4">{truncateText(bike.bikeDescription, 100)}</p>
                    <p className="mb-2"><strong>Price:</strong> ₹{bike.bikePrice}/day</p>
                    <p className="mb-2"><strong>Location:</strong> {bike.bikeLocation}</p>
                    <p className={`mb-4 ${bike.available ? 'text-success' : 'text-danger'}`}>
                      <strong>Status:</strong> {bike.available ? 'Available' : 'Not Available'}
                    </p>
                    <a className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2" href={`tel:+919389691767`}>
                      Rent Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bikes;
