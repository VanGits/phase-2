import React, { useState } from "react";
import "../styles/List.css";
const List = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    if (title !== "" && price !== "" && image !== "") {
      const postItem = { title: title, price: price, image: image };
      alert("Successfully submitted!");
      setTitle("")
      setPrice("")
      setImage("")
      
      fetch("https://phase-2-json-server.onrender.com/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postItem),
      })
        .then((res) => res.json())
        .then((newItem) => addItem(newItem));
    } else {
      alert("Please fill in the inputs!");
    }
  }
  return (
    <div className="List">
      <div className="list-wrapper">
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
    </div>
  );
};

export default List;
