import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./TopBar.css";
import logo from "../../../assets/capstone.svg";

export default function TopBar({ links }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle bg-gradient px-4 py-3 sticky-top">
      <div className="container-fluid d-flex align-items-center">
        <span
          className="navbar-brand mb-0 h1 text-black"
          style={{ letterSpacing: 9 }}
        >
          
          Insurance Ltd
        </span>

        <button
          className="menu-toggle ms-auto"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>

        <div className={`animated-collapse ${isMenuOpen ? "open" : "closed"}`}>
          <ul className="navbar-nav mb-2 mt-2 flex-lg-row align-items-lg-center">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link nav-light-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-sm btn-outline-dark mb-2 mb-lg-0 ms-lg-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
