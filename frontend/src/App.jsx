import logo from "./logo.svg";
import "./App.css";
import Orders from "./Credentials/Orders";
import { Header } from "./Header/Header";
import Purchase from "./Purchase";
import { Routes, Route, Outlet } from "react-router-dom";
import { Auth, useAuth } from "./Credentials/Auth";
import { Register } from "./Credentials/Register";
import { Login } from "./Credentials/Login";
import { Home } from "./Home/Home";
import { ProductList } from "./Product/ProductList";
import { Product } from "./Product/Product";
import { Admin } from "./Credentials/Admin";
import OutletAdmin from "./Credentials/OutletAdmin";
import { Edit } from "../src/Credentials/Edit";
import { ProductContext } from "./Product/ProductContext";
import { useState } from "react";
import PurchaseContext from "./Product/PurchaseContext";
import Analyzer from "./Credentials/Analyzer";
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
              <PurchaseContext>
                <ProductContext>
                  <ProductList />
                </ProductContext>
              </PurchaseContext>
            }
          >
            <Route path=":pid" element={<Product />} />
            <Route path="buy" element={<Purchase />} />
          </Route>
          <Route path="/admin" element={<OutletAdmin />}>
            <Route path="productmgmt" element={<Admin />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="feedback" element={<Analyzer />}></Route>
          </Route>
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
