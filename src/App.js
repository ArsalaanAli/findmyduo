import "./App.css";

import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Frontpage from "./Pages/Frontpage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import { UserContext } from "./Utilities/UserContext";

function App() {
  const [userData, setUserData] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={[userData, setUserData]}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Frontpage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
