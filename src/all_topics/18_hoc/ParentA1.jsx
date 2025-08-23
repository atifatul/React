import React from "react";
import ChildB1 from "./ChildB1";

// HOC use hota hai props drilling ko avoid krne ke liye 

const ParentA1 = () => {
  return (
    <div>
      <h1 className="transform-all duration-300 hover:text-orange-500">Parent A1</h1>
      <ChildB1/>
    </div>
  );
};

export default ParentA1;
