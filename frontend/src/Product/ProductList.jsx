import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productlist.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { usePContext } from "./ProductContext";
export const ProductList = () => {
  const [list, setList] = useState([]);
  const pcontext = usePContext();
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setList(res.data));
  });
  let handlePContext = (x) => {
    pcontext.setId(x.id);
    pcontext.setTitle(x.title);
    pcontext.setDesc(x.description);
    pcontext.setPrice(x.price);
    pcontext.setImg(x.image);
    pcontext.setFeedback(x.feedback);
  };
  return (
    <div className="productlist-cont">
      <Outlet></Outlet>
      <div className="productlist-container">
        {list.map((x) => (
          <Card style={{ width: "18rem" }}>
            <div
              style={{ display: "flex", placeContent: "center", padding: 50 }}
            >
              <Card.Img
                variant="top"
                src={x.image}
                style={{ width: 200, height: 200 }}
              />
            </div>
            <Card.Body>
              <Card.Title>{x.title}</Card.Title>
              <Card.Text>{x.description}</Card.Text>
              <div
                style={{
                  display: "flex",
                  placeContent: "center",
                  gap: 30,
                }}
              >
                <Button variant="success">Buy</Button>
                <NavLink to={`${x.id}`}>
                  <Button variant="primary" onClick={() => handlePContext(x)}>
                    Feedback
                  </Button>
                </NavLink>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
