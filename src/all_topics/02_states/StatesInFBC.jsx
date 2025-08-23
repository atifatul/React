// koi bhi function agr xml ko return kr rha hai toh usse component kehte hai
import { useState } from "react"; // by default FBC stateless hai toh yeh hook ka use krke usse statfull bna rhe hai useState ka use krke .

const StateInFBC = () => {
  let [state, setState] = useState("Hello"); //[ud,func] useState hme array return krke de rha hai aur usse hm destructure kr rha hai
  const handleState = () => {
    setState("Bye World");
  };
  return (
    <div>
      <h1>Learn States in FBC {state}</h1>
      <button onClick={handleState}>Update State</button>
    </div>
  );
};
export default StateInFBC;

// yeh {state } h1 tag ke andar jo use kr rhe hai woh jo useState ka hai variable woh yahan use kr rha hai.
// And yeh {} curly braces yahan pr expression hai .
