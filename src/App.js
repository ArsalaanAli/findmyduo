import "./nav.css";
import { React } from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar loggedIn={false} />
    </div>
  );
}

export default App;
