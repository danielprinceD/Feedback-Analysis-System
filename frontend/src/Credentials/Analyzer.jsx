import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
const Analyzer = () => {
  const [positive, setPositive] = useState([]);
  const [negative, setNegative] = useState([]);
  const [list, setList] = useState([]);
  let doit = () => {};
  list.some((x) => {
    x["feedback"].some((u) => {
      u["status"] !== "Negative"
        ? positive.push({
            id: x.id,
            title: x.title,

            description: x.description,
            image: x.image,
            price: x.price,
            feedback: u.message,
            user: u.user,
            date: u.date,
            time: u.time,
          })
        : negative.push({
            id: x.id,
            title: x.title,

            description: x.description,
            image: x.image,
            price: x.price,
            feedback: u.message,
            user: u.user,
            date: u.date,
            time: u.time,
          });
    });
  });
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      setList(res.data);
    });
  }, []);
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th className="w-50 bg-success text-white" scope="col">
              Positive
            </th>
            <th scope="col " className="w-50 bg-danger text-white">
              Negative
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>
              {positive.map((u) => (
                <table class="table table-bordered w-100">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">User</th>
                      <th scope="col">Feedback </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{u.id}</td>
                      <td>
                        <img style={{ width: 90 }} src={u.image} alt="" />
                      </td>
                      <td>{u.title}</td>
                      <td>{u.description}</td>
                      <td>{u.price}</td>
                      <td>{u.user}</td>
                      <td>{u.feedback}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </td>

            <td className="w-100">
              {negative.map((u) => (
                <table class="table table-bordered ">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">User</th>
                      <th scope="col">Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{u.id}</td>
                      <td>
                        <img style={{ width: 90 }} src={u.image} alt="" />
                      </td>
                      <td>{u.title}</td>
                      <td>{u.description}</td>
                      <td>{u.price}</td>
                      <td>{u.user}</td>
                      <td>{u.feedback}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Analyzer;
