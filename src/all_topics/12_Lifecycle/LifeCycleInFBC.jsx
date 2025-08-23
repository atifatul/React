import React, { useEffect, useState } from "react";
import { useRef } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);

  const initialRender = useRef(true); // {current:true}

  // yeh 2 chiz accept krta hai 1. Callback function 2. Dependency array
  useEffect(() => {
    console.log("Component Mounted");

    let id = setInterval(() => {
      console.log("Api call");
    }, 2000);

    return () => {
      console.log("Component Unmounted");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC</h1>
      <h2>Counter ={count}</h2>
      <button onClick={() => setCount(count + 1)}>UPDATE</button>
    </div>
  );
};

export default LifeCycleInFBC;

// jo chiz class based mein component mOunt,unmount and update krta hai woh yaha function based mein useEffect() hook ki help se kr skte hai .
