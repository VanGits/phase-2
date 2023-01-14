import React, { useState } from "react";
import "../styles/List.css";
const List = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    const postItem = { title: title, price: price, image: image }
    fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        
        },
        body: JSON.stringify(postItem)
    })
  }
  return (
    <div className="List">
      <h1>List an Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />
        <label>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default List;
