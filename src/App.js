import "./App.css";

import { React } from "react";
import Navbar from "./Navbar";
import Frontpage from "./Frontpage";

function App() {
  return (
    <div className="App">
      <Navbar loggedIn={false} />
      <Frontpage />
    </div>
  );
}

export default App;
