import { useContext, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext();
export const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const login = (name) => {
    setUser(name);
    sessionStorage.setItem("name", name);
    navigate("/");
  };
  const logout = () => {
    setUser("");
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("password", "");
    sessionStorage.setItem("id", "");
    toast.success("Logout Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/");
  };
  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
