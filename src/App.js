import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Browse from "./components/Browse";
import List from "./components/List";
import Cart from "./components/Cart";

const App = () => {

  const [items, setItems] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(r => r.json())
    .then(data => setItems(data))
  },[])

  console.log(items)
  return (
    <div className="App">
        
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/browse">
            <Browse items = {items}/>
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
