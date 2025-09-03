import { configureStore, createSlice } from "@reduxjs/toolkit";
import ReduxCounter from "./ReduxCounter";
import { Provider } from "react-redux";
// Provider ka inbulit props hai "store"

// yeh neeche createSlice mein object mein jo  keys hai woh inbuilt hai .
// Store mein "reducer" hai and slice mein "reducers " hai yaad rkhna 
// !step 2: create a slice/feature
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: 0,
  reducers: {
    // actions
    increment: (prevState, action) => {
      return prevState + 1;
    },
    decrement: (prevState, action) => {
      if (prevState > 0) return prevState - 1;
    },
    reset: (prevState, action) => {
      return 0;
    },
  },
});

export let {increment,decrement,reset}= counterSlice.actions


// ! step 1: create a store
const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const ReduxPractice = () => {
  return (
    <div>
      <Provider store={reduxStore}>
        <ReduxCounter />
      </Provider>
    </div>
  );
};

export default ReduxPractice;
