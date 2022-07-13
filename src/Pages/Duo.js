import "./Duo.css";
import databaseRef from "../Utilities/firebase";
import { ref, onValue, push, query, limitToFirst } from "firebase/database";
import { useState, useEffect } from "react";
import PostModal from "./PostModal";

export default function Duo(props) {
  const [activeDuoUsers, setActiveDuoUsers] = useState(10);
  const [postList, setPostList] = useState({});

  //GRABS LATESTS POSTS UP TO POST LIMIT
  useEffect(() => {
    console.log("hi");
    const newPosts = query(ref(databaseRef, "/DuoPosts"), limitToFirst(50));
    onValue(newPosts, (snapshot) => {
      console.log(snapshot.val());
      setPostList(snapshot.val());
    });
  }, []);

  const addPost = () => {
    const postListRef = ref(databaseRef, "/DuoPosts");
    const newPostRef = push(postListRef, { hello: "world" });
  };

  const getPostsSize = () => {
    var duoDatabase = ref(databaseRef, "/DuoPosts");
    onValue(duoDatabase, (snapshot) => {
      console.log(snapshot.size);
      setActiveDuoUsers(snapshot.size);
    });
  };

  return <PostModal />;

  /*
  return (
    <div>
      <button onClick={addPost}>AddPost</button>
      <h1 className="title">
        There are currently {activeDuoUsers} players looking for a Duo
      </h1>
      <table className="duoTable">
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Rank</th>
          <th>Agents</th>
        </tr>
        {
          Object.keys(postList).map((item) => {
            <tr>
              <td>hello</td>
            </tr>;
          })
          //FIX THIS
        }
        <tr>
          <td>Clifford</td>
          <td>A desc</td>
          <td>Gold 1</td>
          <td>Jett</td>
        </tr>
        <tr>
          <td>Clifford</td>
          <td>A desc</td>
          <td>Gold 1</td>
        </tr>
        <tr>
          <td>Clifford</td>
          <td>A desc</td>
          <td>Gold 1</td>
        </tr>
      </table>
    </div>
  );
  */
}
