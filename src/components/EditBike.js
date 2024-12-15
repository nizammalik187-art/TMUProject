import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBike = () => {
  const [formData, setFormData] = useState({
    bikeName: '',
    bikeType: '',
    bikePrice: '',
    bikeLocation: '',
    bikeDescription: '',
    bikeImage: null,
    available: true,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();  // Retrieve bike ID from the URL

  useEffect(() => {
    // Fetch the existing bike data
    const fetchBikeData = async () => {
      try {
        const response = await axios.get(`https://nitinapi.onrender.com/api/bike/${id}`);
        const bike = response.data;
        setFormData({
          bikeName: bike.bikeName,
          bikeType: bike.bikeType,
          bikePrice: bike.bikePrice,
          bikeLocation: bike.bikeLocation,
          bikeDescription: bike.bikeDescription,
          bikeImage: null,  // Keep it null to avoid overwriting image if not updated
          available: bike.available,
        });
      } catch (error) {
        console.error('Error fetching bike data:', error);
        setError('Failed to fetch bike data.');
      }
    };

    fetchBikeData();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }
    setError('');
    setFormData({
      ...formData,
      bikeImage: file,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      available: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const response = await axios.put(`https://nitinapi.onrender.com/api/bike/update/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      alert('Bike updated successfully!');
      navigate('/bikeList');
    } catch (error) {
      console.error('Error updating bike:', error);
      setError('Failed to update bike. Please try again.');
    }
  };

  return (
    <div className="container" style={{ marginTop: '112px' }}>
      <div className="admin-form-container wow fadeInUp">
        <h2 className="admin-form-title">Edit Bike Listing</h2>
        {error && <p className="text-danger">{error}</p>}
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
          <button type="submit" className="btn btn-primary btn-create rounded-pill text-white">Update Bike</button>
        </form>
      </div>
    </div>
  );
};

export default EditBike;
