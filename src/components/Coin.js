import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <>
    <div className="coin  ">
      <div className=" ">
      <h1> Name: {name}</h1>
      <img src={icon} />
      <h3> Price: ${price}</h3>
      <h3> Symbol: {symbol}</h3>
      </div>
    </div>
    </>
  );
}

export default Coin;
