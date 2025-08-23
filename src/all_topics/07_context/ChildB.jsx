import { useContext } from "react"; // yeh useContext ek hook hai .
import { myContextStore } from "./Context1";

const ChildB = () => {
  let val = useContext(myContextStore); //3.Step -> Consume context
  return (
    <div>
      <h1> Child B{val}</h1>
    </div>
  );
};
export default ChildB;

// Ek line mein:
// Aapne ek data (Hii) ko top se direct ChildB tak bhej diya, bina beech ke components ko props dene ke. Isko hi Context API kehte hain.