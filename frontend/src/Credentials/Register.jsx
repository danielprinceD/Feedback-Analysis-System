import React, { useState } from "react";
import "./login1.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
toast.configure();
export const Register = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  let handleSignup = (e) => {
    e.preventDefault();
    user && pass && email
      ? axios
          .post("http://localhost:3002/users", {
            username: user,
            password: pass,
            email: email,
          })
          .then(() => {
            toast.success("Registered Successfully", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/login");
          })
          .catch(() => {
            toast.error("Registration Failed", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
      : toast.error("Fill the Signup Form", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  };

  return (
    <div className="sign-cont">
      <form action="#" className="form-si" onSubmit={(e) => handleSignup(e)}>
        <h1 className="form-title-si">Sign up Form</h1>
        <div className="firstbtn-si"></div>
        <div className="form-group-si">
          <input
            type="text"
            className="form-control-si"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group-si">
          <input
            type="text"
            class="form-control-si"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div class="form-group-si">
          <input
            type="password"
            className="form-control-si"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="bottom-box-si">
          <br />
          <br />
          <br />
          <a href="#" className="contain-si">
            Forgotpassword{" "}
          </a>
          <br />
          <button className="button-30-si" type="submit" role="button">
            Signup
          </button>
        </div>
        <br />
        <div class="container-si">
          <p>
            Already have an Account <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};
