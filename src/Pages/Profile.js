import { React, useState, useContext } from "react";
import { UserContext } from "../Utilities/UserContext";
import { useFormik } from "formik";

function Profile() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const formik = useFormik({
    initialValues: {
      riotId: "",
      description: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      toggleEdit();
    },
  });

  if (!editing) {
    return (
      <div>
        <h1>{user["username"]}</h1>
        <h1>Profile</h1>
        <button onClick={toggleEdit}>EDIT PROFILE</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{user["username"]}</h1>

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

          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />

          <button type="submit">SAVE PROFILE</button>
        </form>
      </div>
    );
  }
}

export default Profile;
