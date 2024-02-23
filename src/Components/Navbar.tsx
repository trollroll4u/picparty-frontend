import { useState } from "react";
import Logo from "../assets/small logo.png";
import { useSelector } from "react-redux";
import { UserData } from "../DataStructure";
import { useAuth0 } from "@auth0/auth0-react";

function MyNavbar() {
  // const user = useSelector((state: UserData) => state.user);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const loginNavbar = () => {
    if (isAuthenticated) {
      // User is logged in
      return (
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{ marginRight: "10px" }}>
            <a href="/profile">
              <button type="button" className="btn btn-light fw-bold">
                <i className="bi bi-person-circle"></i>
                &nbsp; Profile
              </button>
            </a>
          </li>
          <li className="nav-item" style={{ marginRight: "10px" }}>
            <button
              onClick={() => logout({logoutParams: { returnTo: window.location.origin }})}
              type="button"
              className="btn btn-light fw-bold"
            >
              Log out
            </button>
          </li>
        </ul>
      );
    } else {
      // User is not logged in
      return (
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{ marginRight: "10px" }}>
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="btn btn-light fw-bold"
            >
              Sign in
            </button>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="PartyPic logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ fontWeight: "bold" }}
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/search"
                style={{ fontWeight: "bold" }}
              >
                Search
              </a>
            </li>

            <li className="nav-item">
              <a href="/create">
                <button type="button" className="btn btn-light fw-bold">
                  Create
                </button>
              </a>
            </li>
          </ul>
          {loginNavbar()}
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
