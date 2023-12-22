// import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" id="nav-link" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" id="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="nav-link" to="/procategory">
                  Category
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " id="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " id="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text.${props.mode === "light" ? "dark" : "light"
                }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
                style={{ cursor: "pointer" }}
              />
              <label
                className={` "form-check-label modeText" text.${props.mode === "light" ? "dark" : "light"
                  }  htmlFor="flexSwitchCheckDefault" `}
              >
                <strong> {props.toText}</strong>
              </label>
            </div>
            <form className="searchBtn d-flex mx-2 me-4" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to="/search"> <button className="btn btn-outline-secondary " type="submit" ><img src="./search.png" alt="." style={{ width: "22px" }} /></button></Link>
            </form>

            <div className="cart   me-2">
              <Link id="nav-link" to="/cart">
                <img src="./assets/images/cart.png" alt="." style={{ width: "30px" }} />
                <span className="badge badge-pill badge-primary" style={{
                  color: props.mode === "dark" ? "red" : "black",
                }}><strong>4</strong></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
