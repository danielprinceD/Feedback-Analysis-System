import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="navigation-container btn-group mr-2">
      <NavLink to="/" className="text-decoration-none">
        Home
      </NavLink>
      <NavLink to="/contact" className="text-decoration-none">
        Contact us
      </NavLink>
      <NavLink to="/about" className=" text-decoration-none">
        About Us
      </NavLink>
      <NavLink to="/products" className=" text-decoration-none">
        Products
      </NavLink>
      <NavLink to="/myOrder" className=" text-decoration-none">
        My Orders
      </NavLink>
      {sessionStorage.getItem("name") == "admin" && (
        <NavLink to="/admin" className=" text-decoration-none">
          Admin
        </NavLink>
      )}
    </div>
  );
};
