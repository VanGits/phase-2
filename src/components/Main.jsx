import React from "react";
import "../styles/Main.css";
import picture from "../assets/pic4.svg";
import bg from "../assets/blobbg.svg"

const Main = () => {
  return (
    <div className="Main">
        
      <div className="main-content">
        <img src={picture} alt="pic" />
        <div className="main-text">
          <h1>Online Marketplace</h1>
          <p>
          Experience the convenience of online shopping with our mock marketplace web application. Browse, add to cart, and purchase all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
