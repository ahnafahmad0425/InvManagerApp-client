import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Inventory
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-items">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to={"/view-items"}>
                View All Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-items"}>
                Add new Items
              </Link>
            </li>
          </ul>
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
