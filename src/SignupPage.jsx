import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/signup", params)
      .then((response) => {
        event.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start pt-5"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: "420px" }}>
        <h2 className="card-title text-center mb-4">Create an Account</h2>

        {errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            <ul className="mb-0">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              required
              autoComplete="name"
            />
          </div>

          {/* Email input — make sure this stays here */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              required
              autoComplete="email"
            />
          </div>

          {/* Password inputs and toggle go below */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              required
              autoComplete="new-password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label fw-bold">
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type={showPassword ? "text" : "password"}
              className="form-control"
              required
              autoComplete="new-password"
            />
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="showPasswordToggle"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="showPasswordToggle">
              Show Password
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
        </form>

      </div>
    </div>
  );
}
