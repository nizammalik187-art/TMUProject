import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bike listings
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get('https://nitinapi.onrender.com/api/bikeList');
        setBikes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bike listings:', error);
        setLoading(false);
      }
    };
    fetchBikes();
  }, []);

  // Delete bike
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this bike?');
    if (confirmDelete) {
      try {
        await axios.get(`https://nitinapi.onrender.com/api/delete/${id}`);
        setBikes(bikes.filter((bike) => bike._id !== id)); // Remove from local state
        alert('Bike deleted successfully!');
      } catch (error) {
        console.error('Error deleting bike:', error);
        alert('Failed to delete bike');
      }
    }
  };

  // Edit bike (Navigate to edit page)
  const handleEdit = (id) => {
    window.location.href = `/edit-bike/${id}`; // Assuming edit page routing
  };

  // Toggle availability
  const handleToggleAvailability = async (id) => {
    try {
      const response = await axios.get(`https://nitinapi.onrender.com/api/toggleAvailability/${id}`);
      setBikes(
        bikes.map((bike) =>
          bike._id === id ? { ...bike, available: response.data.bike.available } : bike
        )
      );
    } catch (error) {
      console.error('Error updating availability:', error);
      alert('Failed to update availability');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container" style={{ marginTop: '112px' }}>
      <h2 className="text-center mb-4">Bike Listings</h2>
      <div className="row">
        {bikes.map((bike) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={bike._id}>
            <div className="card h-100">
              <img
                src={`https://nitinapi.onrender.com/uploads/${bike.bikeImage}`}
                className="card-img-top"
                alt={bike.bikeName}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{bike.bikeName}</h5>
                <p className="card-text">
                  <strong>Type:</strong> {bike.bikeType} <br />
                  <strong>Price:</strong> ₹{bike.bikePrice}/day <br />
                  <strong>Location:</strong> {bike.bikeLocation} <br />
                  <strong>Description:</strong>{' '}
                  <span className="text-truncate" style={{ display: 'block', maxWidth: '100%' }}>
                    {bike.bikeDescription}
                  </span>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className={`btn btn-sm ${bike.available ? 'btn-success' : 'btn-secondary'}`}
                    onClick={() => handleToggleAvailability(bike._id)}
                  >
                    {bike.available ? 'Available' : 'Unavailable'}
                  </button>
                  <div>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(bike._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(bike._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeList;
