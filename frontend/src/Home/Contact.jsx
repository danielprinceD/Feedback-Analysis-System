import React from "react";

const Contact = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-5">
      <h3>Contact Form</h3>
      <form className="w-50 d-flex flex-column gap-3">
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address : </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=""
          />
        </div>
        <div className="d-flex flex-wrap  ">
          <div class="form-group w-50">
            <label for="exampleFormControlInput1">First Name : </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <div class="form-group w-50">
            <label for="exampleFormControlInput1">Last Name : </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Phone Number : </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Feedback :</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
