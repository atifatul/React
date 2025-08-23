// Props(properties) ka mtlb hai ki parent ka data hm child mein call kr skte hai aur isse use krle .
// Props se sirf data From Parent to Child kr skte hai yahi ek tarika hai bss.
// Props are immutable  (read only )

import PropChild1 from "./PropChild1";
import PropChild2 from "./PropChild2";

const PropParent1 = () => {
  let data = "Hello";
  let obj = {
    id: 1,
    ename: "Atif",
  };
  let arr = [10, 20, 30];
  return (
    <div>
      <h1>I am Prop Parent </h1>
      {/* {PropChild1(data)};   // yeh javascript ka format hai  */}

      {/* Sending Multiple Props */}
      <PropChild1 prop1={data} prop2={obj} prop3={arr} />

      {/* Sending Single Prop with Multiple Values */}
      <PropChild2 propdata={{ data, obj, arr }} />
    </div>
  );
};
export default PropParent1;

// <PropChild1 abc={data} />  yeh XML ka format mein child ko call kr rhe hai and attribute abc wala bnaye hai jo ki child mein jayega and yeh return krta hai ek object.

// Prop ka connections hai  => child call hai parent mein  -> and parent call hai App men .
