import './navbar.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  function handleLogout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Ruet GuestRoom
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="/contactUs">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              {user ? (
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.username}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleLogout}
                        href="#"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      Signup
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
