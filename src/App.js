import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Browse from "./components/Browse";
import List from "./components/List";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";

const App = () => {

  const [items, setItems] = useState([])
  const [itemsInCart, setItemsInCart] = useState([])
  
  useEffect(() => {
    fetch("https://phase-2-json-server.onrender.com/items")
    .then(r => r.json())
    .then(data => setItems(data))
  },[])
  

  function handleDataFromChild(newData){
    setItemsInCart([...itemsInCart, newData])
   
  }


  return (
    <div className="App">
        
      <BrowserRouter>
        <Nav cartLength = {itemsInCart.length}/>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/browse">
            <Browse items = {items} onDataChange={handleDataFromChild}/>
          </Route>
          <Route path="/list">
            <List setItems = {setItems} items = {items}/>
          </Route>
          <Route path="/cart">
            <Cart cartList = {itemsInCart}/>
          </Route>
          <Route path="/items/:id">
            <ItemDetail/>

          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
