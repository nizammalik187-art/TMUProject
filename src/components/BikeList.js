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
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price (₹/Day)</th>
              <th>Location</th>
              <th>Description</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike) => (
              <tr key={bike._id}>
                <td>
                  <img
                    src={`https://nitinapi.onrender.com/uploads/${bike.bikeImage}`}
                    alt={bike.bikeName}
                    className="img-thumbnail"
                    style={{ width: '80px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td>{bike.bikeName}</td>
                <td>{bike.bikeType}</td>
                <td>{bike.bikePrice}</td>
                <td>{bike.bikeLocation}</td>
                <td className="text-truncate" style={{ maxWidth: '150px' }}>
                  {bike.bikeDescription}
                </td>
                <td>
                  <button
                    className={`btn btn-sm ${bike.available ? 'btn-success' : 'btn-secondary'}`}
                    onClick={() => handleToggleAvailability(bike._id)}
                  >
                    {bike.available ? 'Available' : 'Unavailable'}
                  </button>
                </td>
                <td>
                  <div className="d-flex">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BikeList;
