import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productlist.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { usePContext } from "./ProductContext";
import { usePurchase } from "./PurchaseContext";
export const ProductList = () => {
  const [list, setList] = useState([]);
  const pcontext = usePContext();
  const buycontext = usePurchase();
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setList(res.data));
  });
  let handlePurcase = (x) => {
    buycontext.setId(x.id);
    buycontext.setTitle(x.title);
    buycontext.setDesc(x.description);
    buycontext.setPrice(x.price);
    buycontext.setImg(x.image);
  };
  let handlePContext = (x) => {
    pcontext.setId(x.id);
    pcontext.setTitle(x.title);
    pcontext.setDesc(x.description);
    pcontext.setPrice(x.price);
    pcontext.setImg(x.image);
    pcontext.setFeedback(x.feedback);
  };
  const [pop, setPop] = useState(false);
  let controlBlur = pop ? "blurrinig-effect" : "";
  return (
    <div className="productlist-cont">
      <div className="product-outlet-container">
        {pop && (
          <>
            <Outlet></Outlet>
            <button className="btn btn-danger" onClick={() => setPop(false)}>
              Cancel
            </button>
          </>
        )}
      </div>
      <div className={"productlist-container " + controlBlur}>
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
                <NavLink to="buy">
                  <Button
                    variant="success"
                    onClick={() => {
                      setPop(true);
                      handlePurcase(x);
                    }}
                  >
                    ₹ {x.price}
                  </Button>
                </NavLink>
                <NavLink to={`${x.id}`}>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handlePContext(x);
                      setPop(true);
                    }}
                  >
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
