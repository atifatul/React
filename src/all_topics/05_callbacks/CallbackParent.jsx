// Yeh callback ki help se from Child to parent data fetch ho rha hai jaise parent mein ek function bnaya and then props ke through woh callbackchild mein gya hai and then callback child parent mein data send kr rha hai through button click kr pe .
import CallbackChild from "./CallbackChild";

const CallbackParent = () => {
  function getData(data) {
    console.log("Received data from Child and ", data);
  }
  return (
    <div>
      <h1> Callback Parent </h1>
      <CallbackChild getData={getData} />
    </div>
  );
};
export default CallbackParent;
