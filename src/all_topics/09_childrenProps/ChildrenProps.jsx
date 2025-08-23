// Yeh ek aur tarika hai from parent to child data bhejne ka .

import ChildA1 from "./ChildA1";

const ChildrenProps = () => {
  return (
    <div>
      <h1>Learn Children Props</h1>

      <ChildA1>
        {/* Yeh neeche xml ko childA1 mein bhej rhe hai and yeh dono h2,h3 ChildA1 ke children hai  */}
        {/* Yahan paired tag mein data pass ho rha hai  */}
        {/* And yahan koi bhi props send nhi kr rha hai phir bhi ChildA1 mein jb console krenge toh wahan ek empty object show krega  */}
        {/* And jb hm data yahan se pass krenge toh by default object mein key "children " rhega. and uske vale mein yeh array ke andar yeh store hoga value. */}
        <h2>Send Me To CHild comp</h2>
        <h1>Hello React</h1>
      </ChildA1>
    </div>
  );
};

export default ChildrenProps;
