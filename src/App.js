import About from "./About";
import "./App.css";
import Navbar from "./componets/Navbar";
// import Home from "./componets/Home";
import React, { useState } from "react";
// import { Routes, Route } from "react-router";

function App() {
  // 1. State: abhi light mode hai ya dark, yeh yaad rakhta hai
  const [mode, setMode] = useState("light");

  // 2. Yeh function mode badalta hai aur page ka background bhi
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b1d3a"; // dark blueish
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      {/* 3. mode aur toggleMode ko Navbar ko props me bhej rahe hain */}
      <Navbar /*navbar ko call kiya */
        title="Darkmode" // string prop
        about="About Us" // string prop
        mode={mode} // data prop (state ki value)
        toggleMode={toggleMode} // function prop (mode badalne wala function)
      />
      {/* <Routes> */}
      
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}

      <div style={{ padding: "20px" }}>
        <h2>Hello React</h2>
        <p>Upar wale switch se dark/light mode change karke dekho.</p>
      </div>

      <About />
    </>
  );
}

export default App;
