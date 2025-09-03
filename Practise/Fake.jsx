import React, { useReducer } from "react";

let initialState = 0;
  const reducerFunc = (prevstate, action) => {
    console.log(prevstate, action);
    switch (action.type) {
      case "incre":
        return prevstate + 1;
        
      case "decre":
        if (prevstate > 0) return prevstate - 1;
      case "reset":
        return 0;
    }
  };

const Fake = () => {
  

  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1>Reducer Function count : {state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "incre" });
        }}
      >
        Incre
      </button>
      <br /><br />
      <button
        onClick={() => {
          dispatch({ type: "decre" });
        }}
      >
        Decre
      </button>
      <br /><br />
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Fake;
