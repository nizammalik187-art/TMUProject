import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '', // Updated to match the `email` field in the backend
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://nitinapi.onrender.com/api/login', formData);
      console.log('Login response:', response.data);

      if (response.status === 200) {
        localStorage.setItem('auth', 'yes');
        console.log(localStorage.getItem('auth'));
        alert('Login successful!');
        navigate('/bikeList'); // Redirect to the dashboard or desired page
      } else {
        setError(response.data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="container" style={{ marginTop: '112px' }}>
      <div className="login-form-container wow fadeInUp">
        <h2 className="login-form-title">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary rounded-pill text-white py-2 px-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
