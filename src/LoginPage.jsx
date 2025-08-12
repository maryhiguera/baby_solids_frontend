import axios from "axios";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/login", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        setIsLoggedIn(true);
        event.target.reset();
        navigate("/");
      })
      .catch(() => {
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center text-primary mb-4">Login</h2>

          {errors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {errors.map((error) => (
                <div key={error}>{error}</div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" name="email" type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input id="password" name="password" type="password" className="form-control" required />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
