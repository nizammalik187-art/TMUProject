import React, { useEffect, useState } from "react";
import axios from "axios";

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get("https://nitinapi.onrender.com/api/bikes");
        setBikes(response.data);
      } catch (err) {
        setError("Failed to fetch bikes. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBikes();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">Available Bikes</h4>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="row g-4 justify-content-center">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                <div className="bike-card rounded placeholder-glow">
                  <div className="bike-img placeholder rounded-top" style={{ height: "200px", background: "#ddd" }}></div>
                  <div className="bike-content bg-light p-4">
                    <div className="placeholder w-75 mb-3" style={{ height: "20px", background: "#ccc" }}></div>
                    <div className="placeholder w-100 mb-3" style={{ height: "15px", background: "#ddd" }}></div>
                    <div className="placeholder w-50 mb-3" style={{ height: "15px", background: "#eee" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-danger text-center">{error}</p>}

        {/* If No Bikes */}
        {!loading && !error && bikes.length === 0 && (
          <p className="text-center">No bikes available at the moment.</p>
        )}

        {/* Bike List */}
        <div className="row g-4 justify-content-center">
          {!loading &&
            !error &&
            bikes.map((bike) => (
              <div key={bike._id} className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="bike-card rounded">
                  <div className="bike-img rounded-top">
                    <img
                      src={bike.bikeImage}
                      className="img-fluid rounded-top w-100"
                      alt={bike.bikeName}
                      loading="lazy"
                    />
                  </div>
                  <div className="bike-content rounded-bottom bg-light p-4">
                    <div className="bike-content-inner">
                      <h5 className="mb-4">{bike.bikeName}</h5>
                      <p className="mb-4">{truncateText(bike.bikeDescription, 100)}</p>
                      <p className="mb-2">
                        <strong>Price:</strong> ₹{bike.bikePrice}/day
                      </p>
                      <p className="mb-2">
                        <strong>Location:</strong> {bike.bikeLocation}
                      </p>
                      <p className={`mb-4 ${bike.available ? "text-success" : "text-danger"}`}>
                        <strong>Status:</strong> {bike.available ? "Available" : "Not Available"}
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
