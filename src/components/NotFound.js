import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "96px",
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  message: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  link: {
    fontSize: "18px",
    color: "#3498db",
    textDecoration: "none",
  },
};

export default NotFound;
