import React from "react";

const StaticButtons = () => {
  const phoneNumber = "+919634583400";  // Replace with your phone number
  const whatsappNumber = "+919634583400";  // Replace with your WhatsApp number
  const message = "Hello! I’m interested in renting a bike from your service. Could you provide me with more details on the available options, pricing, and booking process? Thank you!";
  const instagramUrl = "https://www.instagram.com/uttarakhand_bike_rental/profilecard"; 
  return (
    <div style={styles.container}>
      {/* Call Button */}
      <a href={`tel:${phoneNumber}`} style={{ ...styles.button, ...styles.callButton }} aria-label="Call">
        <img src="img/icons8-call-94.png" alt="Call" style={styles.icon} />
      </a>

      {/* WhatsApp Button with pre-filled message */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        style={{ ...styles.button, ...styles.whatsappButton }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <img src="img/icons8-whatsapp-48.png" alt="WhatsApp" style={styles.icon} />
      </a>
      <a
        href={instagramUrl}
        style={{ ...styles.button, ...styles.instagramButton }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <img src="img/insta.png" alt="WhatsApp" style={styles.icon} />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "70px",
    right: "2%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    zIndex: 9999,
  },
  button: {
    borderRadius: "50%",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    animation: "pulse 1.5s infinite",
  },
  callButton: {
    backgroundColor: "#34b7f1", // Light blue for Call
  },
  whatsappButton: {
    backgroundColor: "#25D366", // WhatsApp green
  },
  instagramButton: {
    backgroundColor: "rgb(227 184 198)", // Instagram pink
  },
  icon: {
    width: "28px",
    height: "28px",
  },
  "@keyframes pulse": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.1)" },
    "100%": { transform: "scale(1)" },
  },
  
  // Media queries for responsiveness
  "@media (max-width: 768px)": {
    container: {
      top: "20px", // Move buttons closer to the top on smaller screens
      right: "5px",
      gap: "10px",
    },
    button: {
      padding: "10px", // Reduce button size on smaller screens
    },
    icon: {
      width: "20px",
      height: "20px",
    },
  },
  
  "@media (max-width: 480px)": {
    container: {
      top: "10px",
      right: "5px",
      gap: "8px",
      flexDirection: "row",  // Arrange buttons in a row on very small screens
    },
    button: {
      padding: "8px",
    },
    icon: {
      width: "18px",
      height: "18px",
    },
  },
};

export default StaticButtons;
