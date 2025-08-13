import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./Header";
import { FoodsPage } from "./FoodsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import { FoodLogsPage } from "./FoodLogsPage";
import { FoodsNew } from "./FoodsNew";
import { BabyPage } from "./BabyPage";
import { PopupModal } from "./PopupModal";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000";

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popupModal, setPopupModal] = useState(false);
  const [babyName, setBabyName] = useState("");
  const [babyBirthday, setBabyBirthday] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect (() => {
    axios.get(`/me.json`).then((response) => {
      setIsAdmin(response.data);
      console.log(response.data);
    })
    .catch(() => {
      setIsAdmin(false);
    });
  }, []);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setBabyName("");
      setBabyBirthday("");
      setPopupModal(false);

      // Fetch babies only if NOT admin
      if (!isAdmin) {
        axios.get("/babies.json")
          .then((response) => {
            if (response.data.length === 0) {
              setPopupModal(true);
            }
          })
          .catch(console.error);
      }
    } else {
      setBabyName("");
      setBabyBirthday("");
      setPopupModal(false);
    }
  }, [isLoggedIn, isAdmin]);




  const handleSaveBaby = () => {
    axios.post("/babies.json", { name: babyName, birthdate: babyBirthday })
      .then(() => {
        setPopupModal(false);
      })
      .catch(console.error);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet context={{ isAdmin, setIsLoggedIn, setIsAdmin }} />
      <Footer />
      <PopupModal show={popupModal} onClose={() => setPopupModal(false)}>
        <div className="p-4 text-center">
          <h3 className="text-primary mb-3">
            👶 Welcome! 
          </h3>
          <h4 className="text-primary mb-3">
            Enter your baby's information:
          </h4>
          <div className="mb-3">
            <input
              type="text"
              className="form-control rounded-pill text-center"
              placeholder="Baby's Name"
              value={babyName}
              onChange={(e) => setBabyName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="form-control rounded-pill text-center"
              placeholder="Birthdate"
              value={babyBirthday}
              onChange={(e) => setBabyBirthday(e.target.value)}
            />
          </div>
          <button
            onClick={handleSaveBaby}
            className="btn btn-lg btn-success rounded-pill px-4"
            disabled={!babyName || !babyBirthday}
          >
            Save 😊
          </button>
        </div>
      </PopupModal>
    </div>
  );
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FoodsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/food_logs",
        element: <FoodLogsPage />,
      },
      {
        path: "/baby",
        element: <BabyPage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;