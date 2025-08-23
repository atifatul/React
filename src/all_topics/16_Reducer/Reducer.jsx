// Yeh useReducer () use hota hai complex state management ke liye same functionality as useState() have .
// Yeh hme 2 chiz return krke deta hai ek state aur dusra dispatch function.
// useReducer() apne argument mein 2 value ko accept krta  hai , jo hai useReducer( reducerFunc,initialState)and yeh argument sequence aisa hi hoga
// Jo initial state ke andar value hai woh state mein store hota hai
// dispatch function kko call krenge woh reducerFunc() ko call krega jo ki state ka action ko modify krega .
import { useReducer } from "react";

let initialState = 0;
function reducerFunc(prevstate, action) {
  switch (action.type) {
    case "increment":
      return prevstate + 1;
    case "decrement":
      if (prevstate > 0) return prevstate - 1;
    case "reset":
      return 0;
  }
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1 className="text-center font-semibold">Learn UseReducer</h1>
      <h2>Counter: {state}</h2>
      <button
        className="bg-amber-400 m-4 border"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="bg-blue-400 m-4 border"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="bg-red-400 m-4 border"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;
