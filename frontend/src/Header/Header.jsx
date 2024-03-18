import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import "./header.css";
import { Nav } from "./Nav";
import user from "../assets/user.jpg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Credentials/Auth";

export const Header = () => {
  const auth = useAuth();
  return (
    <div className="header-container" data-aos="fade-down">
      <div className="head-left-container">
        <div className="head-logo">
          <img src={logo} alt="" />
          <h1></h1>
        </div>
      </div>
      <div className="head-center-container">
        <Nav />
      </div>
      <div className="head-right-container">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {!sessionStorage.getItem("name") && (
            <>
              <NavLink to="/register">Sign up</NavLink>

              <NavLink to="/login">Login</NavLink>
            </>
          )}
          {sessionStorage.getItem("name") && (
            <>
              <div style={{ padding: 10 }} className="btn-container">
                <h6>User : {sessionStorage.getItem("name")}</h6>
                <button
                  className="btn btn-danger text-white"
                  onClick={() => {
                    auth.logout();
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          )}
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};
