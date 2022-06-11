import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const cartItem = useSelector((state) => state.cart.itemList);
  console.log(cartItem);
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  console.log(isLogedIn);
  return (
    <div className="App">
      {!isLogedIn && <Auth />}
      {isLogedIn && <Layout />}
    </div>
  );
}

export default App;
