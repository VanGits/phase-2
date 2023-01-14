import React from "react";
import "../styles/Browse.css";

const Browse = ({ items, onDataChange }) => {

    
    function handleClick(item){
        onDataChange(item)
        
       
        
        
    }
    
    
    

  const item = items.map((item) => (
    <div key={item.id} className="item">
      <img src={item.image} alt="" />

      <div className="item-text">
        <h2>{item.title}</h2>
        <h4>Price: ${item.price}</h4>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
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
