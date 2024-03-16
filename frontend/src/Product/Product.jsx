import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { usePContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import Sentiment from "sentiment";
const sentiment = new Sentiment();
export const Product = () => {
  const pcontext = usePContext();
  const navigate = useNavigate();
  const { pid } = useParams();
  const [feedback, setFeedback] = useState();
  let handleSubmit = (pid) => {
    axios.put(`http://localhost:3001/products/${pid}`, {
      title: pcontext.title,
      price: pcontext.price,
      description: pcontext.desc,
      image: pcontext.img,
      feedback: [
        ...pcontext.feedback,
        {
          message: feedback,
          status:
            sentiment.analyze(feedback).score === 0
              ? "Neutral"
              : sentiment.analyze(feedback).score > 0
              ? "Positive"
              : "Negative",
          user: sessionStorage.getItem("name"),
        },
      ],
    });
    navigate("/products");
  };
  return (
    <div className="d-flex flex-column justify-content-center single-product-detail">
      <div>
        <div style={{ textAlign: "right" }}>
          <butoon className="btn btn-danger">close</butoon>
        </div>
        <h1>Feedback</h1>
        <label htmlFor="">Title : {pcontext.title}</label>
        <br />
        <label htmlFor="">Description : {pcontext.desc}</label>
        <br />
        <label htmlFor="">Price : {pcontext.price}</label>
        <form
          action=""
          onSubmit={() => handleSubmit(pid)}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            class="mb-3"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <label for="exampleFormControlTextarea1" class="form-label">
              Enter your Feedback
            </label>
            <div>
              <textarea
                style={{ width: 400 }}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <br />
              <button type="submit" className="w-25 btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};
