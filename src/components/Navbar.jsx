import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <h5>
                <Link to="/">LOGO</Link>
              </h5>
              <div>
                <Link className="ms-4" to="/">
                  Home
                </Link>
                <Link className="ms-4" to="calendar">
                  Calendar
                </Link>
                <Link className="ms-4" to="board">
                  Board
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
