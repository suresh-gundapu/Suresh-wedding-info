
import React  from "react";
import { Link,NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
let Navbar = ()=>{

return (
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
      <Link className="navbar-brand" to="/">Wedding Caremony</Link>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>

              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/calculation">Calculation</NavLink>

              </li>
              {/* Add more links as needed */}
          </ul>
      </div>
  </div>
</nav>
          );

};

export default Navbar;