import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../Button/Button";

function Navbar() {
  var user = null;

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo navbar" />
        </Link>

        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For teams
        </Link>

        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width={"18"} className="search-icon" />
        </form>

        {user === null ? (
          <Link to="/Auth">
            <button className="nav-item nav-links">Log in</button>
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              color="white"
              px="10px"
              py="7px"
              borderRadius="50%"
            >
              {" "}
              <Link
                to="/User"
                style={{ color: "white", textDecoration: "none" }}
              >
                M{" "}
              </Link>
            </Avatar>

            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
