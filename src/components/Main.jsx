import React from "react";
import "../styles/Main.css";
import picture from "../assets/pic4.svg";
import bg from "../assets/blobbg.svg"

const Main = () => {
  return (
    <div className="Main">
        
      <div className="main-content">
        <img src={picture} alt="" />
        <div className="main-text">
          <h1>Online Marketplace</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
