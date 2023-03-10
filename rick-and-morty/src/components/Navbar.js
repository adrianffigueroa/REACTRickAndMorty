import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Inicio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/#">
              Home
            </a>
            <a className="nav-link" href="/#">
              Features
            </a>
            <a className="nav-link" href="/#">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
