// src/pages/Signup.tsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { USER_SERVICE_BASE_URL } from "../config/constants";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const result = await axios.post(`${USER_SERVICE_BASE_URL}/user`, {
        username,
        password,
      });

      if (result.data === "signup unsuccessful") {
        setError("Signup unsuccessful. Please try a different username.");
      } else {
        localStorage.setItem("jwt", result.data);
        setError("");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("An error occurred during signup. Please try again later.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
