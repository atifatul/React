import { useState } from "react";

const CounterInFBC = () => {
  let [count, setCount] = useState(0);

  const incre = () => {
    setCount(count + 1);
  };
  const decre = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter In FBC :{count}</h1>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CounterInFBC;

//  Yahan pr kya ho rha hai ki ek component bnaya hai jisme 3 button hai incre, decre, and reset and useState ki help se button ko chla rhe hai by using OnClick in button .
