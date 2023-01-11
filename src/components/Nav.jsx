import React from "react";
import "../styles/Nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <h1>MARKETPLACE</h1>
        </div>
        <div className="nav-links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/cart">
            <FaShoppingCart id="cart" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
