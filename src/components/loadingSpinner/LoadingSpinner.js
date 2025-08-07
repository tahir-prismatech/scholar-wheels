import React from "react";
import "./LoadingSpinner.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoadingSpinner = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="loading-spinner-container d-flex justify-content-center align-items-center"
    >
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
