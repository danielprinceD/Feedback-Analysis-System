import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, NavLink } from "react-router-dom";
import { ProductList } from "../Product/ProductList";
export const Admin = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    axios.post("http://localhost:3001/products", {
      title: title,
      description: desc,
      price: price,
      image: img,
      feedback: [],
    });
    setImg("");
    setTitle("");
    setDesc("");
    setPrice("");
  };
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setList(res.data));
  });
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/products/${id}`);
  };
  const [title1, setTitle1] = useState("");
  const [id, setId] = useState();
  const [img1, setImg1] = useState("");
  const [desc1, setDesc1] = useState("");
  const [price1, setPrice1] = useState("");
  const [pop, setPop] = useState(false);
  const handleEdit = (id) => {
    axios.put(`http://localhost:3001/products/${id}`, {
      title: title1,
      description: desc1,
      price: price1,
      image: img1,
      feedback: [],
    });
  };
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin</h2>
      </div>
      <div className="admin-control">
        <center>
          <form
            action=""
            onSubmit={(e) => handleSubmit(e)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              width: 1000,
            }}
          >
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Product Image
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Product Name
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Product Description
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Product Price
              </label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="btn btn-success w-25" type="submit">
                Create
              </button>
            </div>
          </form>
        </center>
      </div>
      {pop && (
        <div>
          <div className="py-5">
            <center>
              <form
                action=""
                className="w-50"
                onSubmit={() => handleEdit(id)}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <input
                  type="text"
                  value={title1}
                  placeholder="Title"
                  onChange={(e) => setTitle1(e.target.value)}
                />
                <input
                  type="text"
                  value={img1}
                  placeholder="Image"
                  onChange={(e) => setImg1(e.target.value)}
                />
                <input
                  type="text"
                  value={desc1}
                  placeholder="Description"
                  onChange={(e) => setDesc1(e.target.value)}
                />
                <input
                  type="number"
                  value={price1}
                  placeholder="Price"
                  onChange={(e) => setPrice1(e.target.value)}
                />
                <div>
                  <button type="submit" className="btn btn-primary w-25">
                    Submit
                  </button>
                </div>
              </form>
            </center>
          </div>
        </div>
      )}
      <div className="py-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((x) => (
              <>
                <tr>
                  <td>{x.id}</td>
                  <td>
                    <img
                      src={x.image}
                      style={{ width: 100, height: 100 }}
                      alt="No Image Found"
                    />
                  </td>
                  <td>{x.title}</td>
                  <td>{x.description}</td>
                  <td>{x.price}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        setPop(true);
                        setId(x.id);
                        setImg1(x.image);
                        setTitle1(x.title);
                        setDesc1(x.description);
                        setPrice1(x.price);
                      }}
                    >
                      Edit
                    </button>

                    <br />
                    <br />
                    <button
                      className="btn btn-outline-danger"
                      onClick={(e) => handleDelete(x.id)}
                    >
                      Detele
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
