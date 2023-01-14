import React from "react";
import "../styles/Browse.css";
const Browse = ({ items }) => {
  console.log(items, "in browse");

  const item = items.map((item) => (
    <div key={item.id} className="item">
      <img src={item.image} alt="" />

      <div className="item-text">
        <h4>{item.title}</h4>
        <h3>${item.price}</h3>
        <button>Add to Cart</button>
      </div>
      
    </div>
  ));

  return (
    <div className="Browse">
      
      <div className="items-wrapper">{item}</div>
    </div>
  );
};

export default Browse;
