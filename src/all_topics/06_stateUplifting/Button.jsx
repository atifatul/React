import React from "react";

const Button = ({ setCartCount }) => {
  const updateCart = () => {
    setCartCount((prevState) => prevState + 1);
  };
  return <button onClick={updateCart}> Add to Cart</button>;
};
export default Button;

// prevState ->  iska use isliye hota hai taki aapko hamesha latest aur sahi value mile state update karte waqt.