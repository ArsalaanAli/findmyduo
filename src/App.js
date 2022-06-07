import "./App.css";

import { React } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Frontpage from "./Pages/Frontpage";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={false} />
        <Routes>
          <Route path="/" element={<Frontpage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
