import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Winc Academey</h1>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
    </nav>
  );
};
export default Navbar;
