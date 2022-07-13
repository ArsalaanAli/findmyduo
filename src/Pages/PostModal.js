import { React, useState, useEffect } from "react";
import { useFormik } from "formik";
import "./PostModal.css";

export default function PostModal() {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <div className="container">
      <button className="postButton" onClick={() => setModalToggle(true)}>
        hello
      </button>
      <div className={"modal " + (modalToggle ? "show" : "")}>
        <PostForm />
        <button className="closeButton" onClick={() => setModalToggle(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

const PostForm = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <h1>Editing Profile</h1>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="riotId">Riot ID</label>
        <input
          id="riotId"
          name="riotId"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.riotId}
        />
      </form>
    </div>
  );
};
