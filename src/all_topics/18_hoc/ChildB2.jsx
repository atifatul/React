import React from "react";
import Hoc from "./Hoc"

const ChildB2 = (props) => {
    console.log(props);
    
  return (
    <div>
      <h1>Child B2</h1>
    </div>
  );
};

export default Hoc(ChildB2);
