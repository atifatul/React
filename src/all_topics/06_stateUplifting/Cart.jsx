import React from "react";

const Cart = ({ cartCount }) => {
  return (
    <div>
      <h1>
        My Cart <sup>{cartCount}</sup>
      </h1>
    </div>
  );
};

export default Cart;
