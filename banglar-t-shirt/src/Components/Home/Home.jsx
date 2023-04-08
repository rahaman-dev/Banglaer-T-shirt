import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState([]);

  const handleAddButton = (_id, price, tshirt) => {
    // const priviusPrice = JSON.parse(localStorage.getItem("price"));
    // if (priviusPrice) {
    //   let sum = priviusPrice + price;
    //   localStorage.setItem("price", sum);
    //   setPrice(priviusPrice);
    // } else {
    //   localStorage.setItem("price", price);
    //   setPrice(priviusPrice);
    // }
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      toast("Hi you are already exists");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const removeFromCart = (id) => {
    const remming = cart.filter((ts) => ts._id !== id);
    setCart(remming);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {tshirts.map((tshirt, idx) => (
          <Tshirt
            key={idx}
            tshirt={tshirt}
            handleAddButton={handleAddButton}
          ></Tshirt>
        ))}
      </div>
      <Cart price={price} cart={cart} removeFromCart={removeFromCart}></Cart>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Home;
