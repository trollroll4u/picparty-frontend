import Logo from "../assets/small logo.png";

function MyNavbar() {
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
                events
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="search"
                style={{ fontWeight: "bold" }}
              >
                search
              </a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-light fw-bold">
                Create
              </button>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginRight: "10px" }}>
              <button type="button" className="btn btn-light fw-bold">
                Sign up
              </button>
            </li>
            <li className="nav-item" style={{ marginRight: "10px" }}>
              <button type="button" className="btn btn-light fw-bold">
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;