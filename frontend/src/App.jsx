import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import { Auth, useAuth } from "./Credentials/Auth";
import { Register } from "./Credentials/Register";
import { Login } from "./Credentials/Login";
import { Home } from "./Home/Home";
import { ProductList } from "./Product/ProductList";
import { Product } from "./Product/Product";
import { Admin } from "./Credentials/Admin";
import { Edit } from "../src/Credentials/Edit";
import { ProductContext } from "./Product/ProductContext";
import { useState } from "react";
function App() {
  const auth = useAuth();
  const [pop, setPop] = useState(false);
  return (
    <div className="App">
      <Auth>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/products"
            element={
              <ProductContext>
                <ProductList />
              </ProductContext>
            }
          >
            <Route path=":pid" element={<Product />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path=":pid" element={<Edit />} />
          </Route>
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
