import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header({ isLoggedIn, setIsLoggedIn }) {
  const babyFacts = [
    "Newborns can recognize their mother's voice within days of birth.",
    "Babies are born with about 300 bones, which fuse as they grow.",
    "A baby's sense of smell is fully developed at birth.",
    "Babies are born without kneecaps—they develop around 6 months.",
    "Newborns sleep about 14-17 hours a day, but in short bursts.",
  ];

  const [fact, setFact] = useState("");

  useEffect(() => {
    const randomFact = babyFacts[Math.floor(Math.random() * babyFacts.length)];
    setFact(randomFact);

    const interval = setInterval(() => {
      const newFact = babyFacts[Math.floor(Math.random() * babyFacts.length)];
      setFact(newFact);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          minHeight: "80px",
        }}
      >
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand text-dark fw-bold" to="/">
            Baby First Solids
          </Link>

          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link custom-nav-link" to="/food_logs">
                      Food Logs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-nav-link" to="/baby">
                      Baby
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* Right side: baby fact + auth links */}
            <ul className="navbar-nav ms-auto align-items-center">
              {/* Baby fact */}
              <li className="nav-item me-3 d-none d-lg-block">
                <span
                  className="text-muted small fst-italic"
                  style={{
                    maxWidth: "250px",
                    whiteSpace: "normal",
                    overflow: "visible",
                    textOverflow: "unset",
                    display: "inline-block",
                  }}
                >
                  {fact}
                </span>
              </li>


              {/* Auth links */}
              {isLoggedIn ? (
                <li className="nav-item">
                  <LogoutLink setIsLoggedIn={setIsLoggedIn} />
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link custom-nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <style>{`
          .custom-nav-link {
            color: #333;
            position: relative;
            transition: color 0.3s ease;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
          }

          .custom-nav-link:hover,
          .custom-nav-link:focus,
          .custom-nav-link:active {
            color: #0056b3;
            background-color: #e7f1ff;
            box-shadow: 0 0 8px rgba(0, 86, 179, 0.4);
            text-decoration: none;
          }
        `}</style>
      </nav>
    </header>
  );
}
