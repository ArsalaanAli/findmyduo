import { React, useState } from "react";

function Profile() {
  const [editing, setEditing] = useState(false);
  if (!editting) {
    return (
      <div>
        <h1>Profile</h1>
        <button>EDIT PROFILE</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Editing Profile</h1>
        <button>SAVE PROFILE</button>
      </div>
    );
  }
}

export default Profile;
