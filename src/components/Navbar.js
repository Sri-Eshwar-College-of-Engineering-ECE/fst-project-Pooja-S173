import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">

        <Link className="navbar-brand" to="/dashboard">
          Medicine System
        </Link>

        <div>

          <Link className="btn btn-light m-2" to="/dashboard">
            Dashboard
          </Link>

          <Link className="btn btn-light" to="/medicines">
            Medicines
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;