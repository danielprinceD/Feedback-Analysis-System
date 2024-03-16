import React, { useEffect, useState } from "react";
import { usePurchase } from "./Product/PurchaseContext";
import axios from "axios";
const Purchase = () => {
  const getBuy = usePurchase();
  const [amount, setAmount] = useState(1);
  const [password, setPassword] = useState("");
  const date = new Date();

  let handleSubmit = () => {
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
      alert("Order Placed");
    } else alert("Enter Valid Input");
  };

  return (
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
                  onClick={handleSubmit}
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
  );
};

export default Purchase;
