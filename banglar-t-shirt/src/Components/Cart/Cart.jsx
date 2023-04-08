import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ price, cart, removeFromCart }) => {
  // const [brackPrice, setBrackPric] = useState([]);
  // useEffect(() => {
  //   let priceFromLocalStorage = localStorage.getItem("price");
  //   setBrackPric(priceFromLocalStorage);
  // });
  let message;
  if (cart.length === 0) {
    message = <h2>please add a product</h2>;
  }
  return (
    <div style={{ backgroundColor: "red", width: "400px", padding: "10px" }}>
      <h1 className={`cart ${cart.length === 3 ? "yellow" : "green"}`}>
        Order Summary
      </h1>
      {message}
      {cart.length <= 2 ? "your are pokir" : "your are borolox"}
      <h2>Total Price: {cart.length}</h2>
      {/* <h2>Price:{brackPrice} </h2> */}
      {cart.map((tshirt, idx) => (
        <p key={idx}>
          {tshirt.name}{" "}
          <button
            style={{ width: "50px", fontSize: "20px" }}
            onClick={() => removeFromCart(tshirt._id)}
          >
            x
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
