import React, { useState } from "react";
import Cart from "./Cart";
import Button from "./Button";

const UpliftingParent = () => {
  let [cartCount, setCartCount] = useState(0);
  return (
    <div>
      <h1>Learn State Uplifting</h1>
      <Cart cartCount={cartCount} />
      <Button setCartCount={setCartCount} />
    </div>
  );
};

export default UpliftingParent;

// State Uplifting -> Jab ek parent component apni state ko child components ke saath share karta hai, aur child components us state ko update karte hain, toh is process ko state uplifting kehte hain.
// Yani, state parent mein hoti hai, lekin usko update karne ka control child ke paas bhi hota hai (via props).