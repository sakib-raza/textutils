import React from "react";
// import { Link } from "react-router";

export default function Navbar({
  title = "Set Title Here",
  about = "About Us",
  mode,          // App se aaya
  toggleMode,    // App se aaya
}) {
  // Mode ke hisaab se colors choose karo
  const navStyle = {
    backgroundColor: mode === "dark" ? "#13294b" : "#58646f", // dark blue / light grey
    color: mode === "dark" ? "white" : "black",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const linkStyle = {
    color: mode === "dark" ? "white" : "black",
    textDecoration: "none",
  };

  return (
    // navbar return kiya, aur us
    <nav style={navStyle}>  
      <a style={linkStyle} href=""><b>{title}</b></a>

      <a style={linkStyle} href="/">Home</a>
      <a style={linkStyle} href="/">Features</a>
      <a style={linkStyle} href="/about">{about}</a>

      {/* Right side switch */}
      <div style={{ marginLeft: "auto" }}>
        <input
          type="checkbox"
          id="modeSwitch"
          checked={mode === "dark"}
          onChange={toggleMode}
        />
        <label htmlFor="modeSwitch" style={{ marginLeft: "6px" }}>
          Dark mode
        </label>
      </div>
    </nav>
  );
}