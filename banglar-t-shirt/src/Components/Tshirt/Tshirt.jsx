import React from "react";

const Tshirt = ({ tshirt, handleAddButton }) => {
  const { _id, index, name, picture, gender, price } = tshirt;
  return (
    <div
      style={{
        border: "2px solid gray",
        borderRadius: "10px",
        width: "300px",
        margin: "20px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src={picture}
        style={{ width: "200px", height: "250px", borderRadius: "10px" }}
      />
      <h4>Name: {name}</h4>
      <h4>$: {price}</h4>
      <button
        onClick={() => handleAddButton(_id, price, tshirt)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Tshirt;
