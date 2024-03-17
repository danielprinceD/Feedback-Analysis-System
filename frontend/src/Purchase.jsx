import React, { useEffect, useState } from "react";
import { usePurchase } from "./Product/PurchaseContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Purchase = () => {
  const navigate = useNavigate();
  const getBuy = usePurchase();
  const [amount, setAmount] = useState(1);
  const [password, setPassword] = useState("");
  const date = new Date();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      password === sessionStorage.getItem("password") &&
      amount !== "" &&
      amount != 0
    ) {
      axios.post(`http://localhost:3001/orders`, {
        user: sessionStorage.getItem("name"),
        title: getBuy.title,
        quantity: amount,
        time: date.toLocaleTimeString(),
        date: date.toLocaleDateString(),
      });
      toast.success("Thankyou for Purchasing our Product", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/myOrder");
    } else alert("Enter Valid Input");
  };

  return sessionStorage.getItem("name") ? (
    (getBuy.title || getBuy.price) && (
      <>
        <h1>Purchase</h1>
        <br />
        <div className="d-flex flex-column flex-wrap align-content-center py-4">
          <form>
            <div class="row d-flex flex-column gap-4">
              <div>
                <h4 htmlFor="">Title : {getBuy.title}</h4>
              </div>
              <div>
                <h4 htmlFor="">Price : {getBuy.price}</h4>
              </div>
              <div class="col ">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div class="col ">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-success"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  ) : (
    <div>
      <br />
      <br />
      <br />
      <h4 className="text-warning bg-white d-inline px-5 py-2">
        Login to place Order
      </h4>
      <br />
      <br />
    </div>
  );
};

export default Purchase;
