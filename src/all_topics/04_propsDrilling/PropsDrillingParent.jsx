// yeh props se alag thoda hai is maamle mein ki props data from parent to child bhejta hai bss
// And Props Drilling mein data from parent to nested child bhej skte hai baaki saare kaam same hi hai .
import React from "react";
import PropsDrillingChild1 from "./PropsDrillingChild1";

const PropsDrillingParent = () => {
  let str = "Hello React";
  let arr = [10, 20, 30];
  let obj = {
    id: 1,
    ename: "Atif",
  };
  return (
    <div>
      <h1>I am Parent</h1>
      <PropsDrillingChild1 str={str} arr={arr} obj={obj} />
    </div>
  );
};

export default PropsDrillingParent;
