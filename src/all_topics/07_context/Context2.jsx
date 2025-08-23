import React from "react";
import ParentX from "./ParentX";
import { createContext } from "react";

export const GlobalContext = createContext();
const Context2 = (props) => {
  
  
  return (
    <GlobalContext.Provider value={"Hii"}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context2;

// Folder Structure -> Context2->ParentX->ChildY->ChildZ

// yahan kya hua hai ki app mein paired Context2 ko call krenge uske andar ParentX ko call kra hai jisse Context2 mein ParentX ka use kr skte hai using props.children.
// yahan parentX ko directly Constext2 mein na call krke usse App ke andar Context2 ke andare call kra hai
// TOh yeh indirectly use kra hai ParentX ka Context2 mein.
