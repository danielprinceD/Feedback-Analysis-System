import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { toast } from "react-toastify";
export const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [id, setId] = useState();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/users").then((req) => setList(req.data));
  }, []);
  let validate = list.some((u) => u.username === user && u.password === pass);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate) {
      auth.login(user);
      sessionStorage.setItem("password", pass);
      toast.success("Login Success", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } else {
      toast.error(" Invalid Credentials", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <div className="box-con">
      <form
        action="#"
        className="form-con"
        onSubmit={(e) => handleSubmit(e)}
        data-aos="flip-left"
      >
        <h1 className="form-title-con">Login Form</h1>
        <div className="firstbtn-con"></div>
        <div class="form-group-con">
          <input
            type="text"
            className="form-control-con"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div class="form-group-con">
          <input
            type="password"
            className="form-control-con"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <div class="bottom-box-con">
          <a href="#" className="contain">
            Forgotpassword
          </a>
          <button className="button-30" role="button">
            Login
          </button>
          <br />
        </div>
        <br />
        <div className="container">
          <p>
            Don't have an Account ? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};
