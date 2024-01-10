import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import { setCurrentUser } from "../../actions/currentUser";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var user = useSelector((state) => state.currentUserReducer);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    // const token = user?.token;
    // if (token) {
    //   const decodeToken = jwtDecode(token);
    //   if (decodeToken.exp * 1000 < new Date().getTime()) {
    //     handleLogout();
    //   }
    // }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

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
                {user.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>

            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
