import React from "react";
import App from "../../../App";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Winc Academey</h1>
      <a href="/">Home</a>
      <a href="./students">Students</a>
    </nav>
  );
};
export default Navbar;
