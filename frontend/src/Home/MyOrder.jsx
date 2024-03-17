import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const MyOrder = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((res) => {
      setList(res.data);
    });
  });
  let handleCancelOrder = (x) => {
    prompt(`Type "Yes" for Cancel`) === "Yes"
      ? axios.delete(`http://localhost:3001/orders/${x.id}`).then(() =>
          toast.success("Order Cancelled", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        )
      : toast.error("Failed to Cancel Order", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  };
  return sessionStorage.getItem("name") ? (
    <div className="myorder-container">
      <h2 className="text-primary">My Orders</h2>
      <br />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map(
            (x) =>
              x["user"] === sessionStorage.getItem("name") && (
                <tr>
                  <th>{x.title}</th>
                  <td>{x.quantity}</td>
                  <td>{x.date}</td>
                  <td>{x.time}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCancelOrder(x)}
                    >
                      Cancel Order
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <div>
      <h2 className="text-warning">Login is Required</h2>
    </div>
  );
};

export default MyOrder;
