import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/dashboard" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
