import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const OutletAdmin = () => {
  return (
    <div>
      <div className="admin-header d-flex flex-column gap-2">
        <h2>Admin</h2>
        <div className="d-flex flex-column gap-5 ">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary  ">
            <div
              className="collapse navbar-collapse d-flex justify-content-center"
              id="navbarText"
            >
              <ul className="navbar-nav mr-auto d-flex gap-5">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="productmgmt">
                    Product Management
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="orders">
                    Order Management
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="feedback">
                    Feedback Analysis
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default OutletAdmin;
