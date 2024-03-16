import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((res) => setList(res.data));
  }, []);

  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr className="bg-success">
            <th scope="col">Order Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Username</th>
            <th scope="col">Quantity</th>
            <th scope="col">Time</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => (
            <tr>
              <td>{x.id}</td>
              <td>{x.title}</td>
              <td>{x.user}</td>
              <td>{x.quantity}</td>
              <td>{x.time}</td>
              <td>{x.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
