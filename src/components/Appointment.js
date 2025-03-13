import React, { useState } from 'react';

const Appointment = () => {
  const [showSuccess, setShowSuccess] = useState(false); // State for success message
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    city: '',
    gender: '',
    vehicle: '',
    date: '',
    citySelect: '',
    message: ''
  });

  // Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission

    // Prepare message to send on WhatsApp
    const message = `
      *Appointment Details:*
      - Name: ${formData.firstName}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - City: ${formData.city}
      - Gender: ${formData.gender}
      - Vehicle: ${formData.vehicle}
      - Date: ${formData.date}
      - City: ${formData.citySelect}
      - Message: ${formData.message}
    `;

    // Encode the message for WhatsApp link
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp link
    const whatsappUrl = `https://wa.me/8193852681?text=${encodedMessage}`;

    // Redirect to WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');

    setShowSuccess(true); // Show success message after form submission
  };

  return (
    <div className="container-fluid appointment py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
            <div className="section-title text-start">
              <h4 className="sub-title pe-3 mb-0">Solutions To Your Trip</h4>
              <h4>Best Quality Services With Minimal Rate</h4>
              <p className="mb-4">
                Explore the city on two wheels with our top-notch bike rentals. Whether you're a local or a visitor,
                our bikes are perfect for discovering new places and enjoying the ride. Choose from a variety of models and experience the freedom of cycling!
              </p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4">
                      <h5 className="mb-3">
                        <i className="fa fa-check text-primary me-2"></i> Bike
                      </h5>
                      <p className="mb-0">
                        Adventure is calling – answer with a bike rental that suits your style.
                        Cycle into convenience – easy rentals, unbeatable experiences.
                        Discover the joy of biking – exceptional rides for exceptional journeys.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h5 className="mb-3">
                        <i className="fa fa-check text-primary me-2"></i> Scooty
                      </h5>
                      <p className="mb-0">
                        Adventure is calling – answer with a bike rental that suits your style.
                        Cycle into convenience – easy rentals, unbeatable experiences.
                        Discover the joy of biking – exceptional rides for exceptional journeys.
                      </p>
                    </div>
                    {/* <div className="text-start mb-4">
                      <a href="/" className="btn btn-primary rounded-pill  py-3 px-5">More Details</a>
                    </div> */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="video h-100">
                    <img src="img/service-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt="Well-maintained rental bike ready for hire with flexible pricing" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (form) */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <div className="appointment-form rounded p-5">
              <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
              <h1 className="display-5 mb-4">Contact Us</h1>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gx-4">
                  <div className="col-xl-6">
                    <input
                      type="text"
                      className="form-control py-3 border-primary bg-transparent"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <input
                      type="email"
                      className="form-control py-3 border-primary bg-transparent"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <input
                      type="tel"
                      className="form-control py-3 border-primary bg-transparent"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <input
                      type="text"
                      className="form-control py-3 border-primary bg-transparent"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <select
                      className="form-control custom-select py-3 border-primary bg-transparent"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Your Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-xl-6">
                    <select
                      className="form-select py-3 border-primary bg-transparent"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Vehicle</option>
                      <option value="Bike">Bike</option>
                      <option value="Scooty">Scooty</option>
                      <option value="Car">Car</option>
                    </select>
                  </div>
                  <div className="col-xl-6">
                    <input
                      type="date"
                      className="form-control py-3 border-primary bg-transparent"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <select
                      className="form-select py-3 border-primary bg-transparent"
                      name="citySelect"
                      value={formData.citySelect}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Select City</option>
                      <option value="Haldwani">Haldwani</option>
                      <option value="Nainital">Nainital</option>
                      <option value="Rudrapur">Rudrapur</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-primary bg-transparent"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      cols="30"
                      rows="5"
                      placeholder="Write message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 py-3 px-5">
                      SUBMIT NOW
                    </button>
                  </div>
                </div>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <div className="alert alert-success mt-4" role="alert">
                  <strong>Thank you!</strong> Your message has been sent successfully.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
