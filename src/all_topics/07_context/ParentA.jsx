import React from "react";
import ChildA from "./ChildA";

const ParentA = () => {
  return (
    <div>
      <h1>ParentA</h1>
      <ChildA />
    </div>
  );
};

export default ParentA;

// Context ka use tab hota hai jab aapko data ko deeply nested components tak bina props drilling ke bhejna ho.