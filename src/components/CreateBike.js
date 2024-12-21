import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateBike = () => {
  const [formData, setFormData] = useState({
    bikeName: '',
    bikeType: '',
    bikePrice: '',
    bikeLocation: '',
    bikeDescription: '',
    bikeImage: null,
    available: true, // Add available field with a default value
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      bikeImage: e.target.files[0],
    });
    console.log('Selected file:', e.target.files[0]); // Debugging file input
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      available: e.target.checked, // Update the `available` field based on checkbox
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('bikeName', formData.bikeName);
    data.append('bikeType', formData.bikeType);
    data.append('bikePrice', formData.bikePrice);
    data.append('bikeLocation', formData.bikeLocation);
    data.append('bikeImage', formData.bikeImage);
    data.append('bikeDescription', formData.bikeDescription);
    data.append('available', formData.available);

    try {
      const response = await axios.post('https://nitinapi.onrender.com/api/bike/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      alert('Bike created successfully!');
      navigate('/bikeList'); // Navigate to the bike list page
    } catch (error) {
      console.error('There was an error creating the bike!', error);
      alert('Failed to create bike');
    }
  };

  return (
    <div className="container" style={{ marginTop: '112px' }}>
      <div className="admin-form-container wow fadeInUp">
        <h2 className="admin-form-title">Create Bike </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="bikeName" className="form-label">Bike Name</label>
            <input
              type="text"
              className="form-control"
              id="bikeName"
              placeholder="Enter bike name"
              value={formData.bikeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikeType" className="form-label">Bike Type</label>
            <input
              type="text"
              className="form-control"
              id="bikeType"
              placeholder="Enter bike type (e.g., Road Bike, Mountain Bike)"
              value={formData.bikeType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikePrice" className="form-label">Price per Day (₹)</label>
            <input
              type="number"
              className="form-control"
              id="bikePrice"
              placeholder="Enter price per day"
              value={formData.bikePrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikeLocation" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="bikeLocation"
              placeholder="Enter location"
              value={formData.bikeLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikeImage" className="form-label">Bike Image</label>
            <input
              type="file"
              className="form-control"
              id="bikeImage"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikeDescription" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="bikeDescription"
              placeholder="Enter Description"
              value={formData.bikeDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Available</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="available"
                checked={formData.available}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="available">
                Is Available
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-create rounded-pill text-white">Create Bike</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBike;
