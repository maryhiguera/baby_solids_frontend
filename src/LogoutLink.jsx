import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LogoutLink({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("http://localhost:3000/logout").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      setIsLoggedIn(false);
      navigate("/");
    });
  };

  return (
    <button className="btn btn-outline-danger" onClick={handleClick}>
      <i className="bi bi-box-arrow-right me-2"></i> Logout
    </button>
  );
}
