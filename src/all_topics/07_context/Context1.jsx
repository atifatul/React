import React from "react";
import { createContext } from "react";
import ParentA from "./ParentA";

export const myContextStore = createContext(); //1. Create Context ho rha hai
const Context1 = () => {
  let data = "Hii";
  return (
    <div>
      <myContextStore.Provider value={data}>
        <ParentA />
      </myContextStore.Provider>
    </div>
  );
};
export default Context1;

// Context create krne ke liye 3 steps lgte hai  -> 1. Create Context 2.Provide Context 3. Consume Context
// </myContextStore.Provider> -> yeh bydefault createContext mein rhta hai wahan se liye hai . and yeh 2nd step hai context create krne ka .
