import React from "react";

const ChildA1 = (props) => {
  console.log(props);
  return (
    <div>
      <h1>ChildA1 component</h1>
      {/* yeh javascript format hai toh ui pr render krne ke liye {} iske andar likhenge  */}
      {props.children}
    </div>
  );
};

export default ChildA1;
