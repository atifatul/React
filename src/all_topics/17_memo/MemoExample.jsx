// useMemo performace optimization ke liye use hota hai
// yeh return krke deta hai memorized value aur useeffect aisa nhi krta hai yahi hai difference .
import React, { useCallback, useMemo, useState } from "react";
import MemoChild from "./MemoChild";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   function doubleCount(){
  //     console.log("DOuble count fun");
  //     return count*2;
  //   }

  // ! Performance optimization hook which returns memoized value
  let doubleCount = useMemo(() => {
    console.log("Double count func");
    return count * 2;
  }, [count]);

  const display =()=>{
    console.log("I am display 1");
  }

  //! useCallback() memoized function return krta hai .
  const memoizedFunc =useCallback(()=>{
    console.log("I am display 2");
  },[text])

  return (
    <div>
      <h1 className="text-center font-semibold ">Learn UseMemo Hook</h1>
      <hr />
      <input
        type="text"
        className="border border-gray-500 rounded  w-[70%] block mx-auto my-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2 className="text-center">Counter :{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-red-500 px-3 py-1 rounded block mx-auto "
      >
        Increment
      </button>
      <h2 className="text-center">Double count: {doubleCount}</h2>
      <hr />
      <MemoChild display={memoizedFunc}/>
    </div>
  );
};

export default MemoExample;
