import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Edit = () => {
  const { pid } = useParams();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  let handleSubmit = (pid) => {
    axios.put(`http:localhost:3001/${pid}`, {
      title: title,
      image: img,
      description: desc,
      price: price,
    });
  };
  return (
    <div className="py-5">
      <center>
        <form
          action=""
          onSubmit={(pid) => handleSubmit(pid)}
          className="w-50"
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={img}
            placeholder="Image"
            onChange={(e) => setImg(e.target.value)}
          />
          <input
            type="text"
            value={desc}
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>
            <button type="submit" className="btn btn-primary w-25">
              Submit
            </button>
          </div>
        </form>
      </center>
    </div>
  );
};
