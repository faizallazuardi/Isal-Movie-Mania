import React from "react";
// import { Nav, Navbar, Container } from "react-bootstrap";

export default function Navigasi({ valueNav }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#app">
            Navbar
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" style={{ textTransform: "uppercase", fontSize: 20 }} aria-current="page" href="#app">
                  {!valueNav ? "awal" : valueNav}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#app">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#app">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
