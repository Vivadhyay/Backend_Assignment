import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'antd/dist/antd.css';

import HomePage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Batting from "./pages/Batting/Batting";
import Odi from "./pages/Odi/Odi";
import Fielding from "./pages/Fielding/Fielding";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<HomePage/>} />
        <Route  exact path="/odi" element={<Odi/>} />
        <Route  exact path="/batting" element={<Batting/>} />
        <Route  exact path="/fielding" element={<Fielding/>} />
      </Routes>
    </div>
  );
}

export default App;
