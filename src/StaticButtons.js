import React from "react";

const StaticButtons = () => {
  const phoneNumber = "+919389691797";  // Replace with your phone number
  const whatsappNumber = "+919389691797";  // Replace with your WhatsApp number
  const message = "Hello! I'm interested in Booking of a bike .";  // Custom message

  return (
    <div style={styles.container}>
      {/* Call Button */}
      <a href={`tel:${phoneNumber}`} style={{ ...styles.button, ...styles.callButton }} aria-label="Call">
        <img src="img/icons8-whatsapp-48.png" alt="Call" style={styles.icon} />
      </a>

      {/* WhatsApp Button with pre-filled message */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        style={{ ...styles.button, ...styles.whatsappButton }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <img src="img/icons8-call-94.png" alt="WhatsApp" style={styles.icon} />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "70px",
    right: "10px",
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
  icon: {
    width: "28px",
    height: "28px",
  },
  "@keyframes pulse": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.1)" },
    "100%": { transform: "scale(1)" },
  },
};

export default StaticButtons;
