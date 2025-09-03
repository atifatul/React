import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./ReduxPractice";
// yahan hme 2 hook ka need hai useSelector and useDispatch
const ReduxCounter = () => {
  // accessing redux state
  let value = useSelector((state) => state.counter);
  console.log(value);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>ReduxCounter :{value}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default ReduxCounter;
