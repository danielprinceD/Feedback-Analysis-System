import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { usePContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import Sentiment from "sentiment";
import { toast } from "react-toastify";
const sentiment = new Sentiment();
const date = new Date();
export const Product = () => {
  const pcontext = usePContext();
  const navigate = useNavigate();
  const { pid } = useParams();
  const [feedback, setFeedback] = useState();
  let handleSubmit = (pid) => {
    axios
      .put(`http://localhost:3001/products/${pid}`, {
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
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
          },
        ],
      })
      .then(() => {
        toast.success("Thankyou for Feedback", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    navigate("/");
  };
  return sessionStorage.getItem("name") ? (
    <div className="d-flex flex-column justify-content-center single-product-detail">
      <div>
        <h1>Feedback</h1>
        <br />
        <img src={pcontext.img} alt="No Image" width={200} />
        <br />
        <label htmlFor="">
          <span style={{ fontWeight: "bolder" }}>Title : </span>{" "}
          {pcontext.title}
        </label>
        <br />
        <label htmlFor="">
          <span style={{ fontWeight: "bolder" }}>Description : </span>
          {pcontext.desc}
        </label>
        <br />
        <label htmlFor="">
          <span style={{ fontWeight: "bolder" }}>Price :</span> {pcontext.price}
        </label>
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
              <span style={{ fontWeight: "bolder" }}>Enter your Feedback</span>
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
  ) : (
    <div>
      <br />
      <br />
      <br />
      <h4 className="text-warning bg-white d-inline px-5 py-2">
        Login to Submit your Feedback
      </h4>
      <br />
      <br />
    </div>
  );
};
