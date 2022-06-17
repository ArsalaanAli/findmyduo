import { React, useState, useContext, useEffect } from "react";
import { UserContext } from "../Utilities/UserContext";
import { useFormik } from "formik";
import { ref, get, set } from "firebase/database";
import databaseRef from "../Utilities/firebase";
import AgentSelector from "./AgentSelector";

function Profile() {
  const [editing, setEditing] = useState(false);
  const user = useContext(UserContext)[0];
  const [userAgents, setUserAgents] = useState([]);
  const [userData, setUserData] = useState({
    discordData: user,
    riotId: "",
    description: "",
    rank: "",
    competitive: true,
    agents: [],
  });

  useEffect(() => {
    retrieveUserData();
    // eslint-disable-next-line
  }, []);

  const retrieveUserData = async () => {
    const checkUser = (
      await get(ref(databaseRef, "/Users/" + user["id"]))
    ).val();
    if (checkUser === null) {
      addUserToDatabase();
    } else {
      setUserData(checkUser);
    }
  };

  const addUserToDatabase = async () => {
    const temp = {
      discordData: user,
      riotId: "",
      description: "",
      rank: "",
      competitive: true,
      agents: [],
    };
    await set(ref(databaseRef, "/Users/" + user["id"]), temp);
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const saveProfileToDatabase = async (values) => {
    if (JSON.stringify(values) !== JSON.stringify(userData)) {
      await set(ref(databaseRef, "/Users/" + user["id"]), values);
    }
  };

  const formik = useFormik({
    initialValues: userData,
    onSubmit: (values) => {
      values.discordData = user;
      values.agents = userAgents;
      saveProfileToDatabase(values);
      toggleEdit();
    },
    enableReinitialize: true,
  });

  useEffect(() => {}, [userData]);

  if (!editing) {
    return (
      <div>
        <h1>{user["username"]}</h1>
        <h1>Profile</h1>
        <h2>Game Mode: {userData.competitive ? "Competitive" : "Casual"}</h2>
        <h2>Rank: {userData.rank}</h2>
        <h2>RiotID: {userData.riotId}</h2>
        <h2>Description: {userData.description}</h2>
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

          <label htmlFor="rank">Rank</label>
          <input
            id="rank"
            name="rank"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.rank}
          />
          <h1>Which Agents Do You Play?</h1>
          <AgentSelector agents={userAgents} setAgents={setUserAgents} />
          <button type="submit">SAVE PROFILE</button>
        </form>
      </div>
    );
  }
}

export default Profile;
