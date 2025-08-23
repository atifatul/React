import React from "react";
import { memo } from "react";
//memo -> Lets you skip re-rendering a component when its props are unchanged.
// yeh memo ka use jb re- render ho MemoExample mein like count ar text toh yeh Memochild re-render n ho .
// yeh jb tk koi parent se props nhi aa rha hai tb tk memo isko rokta hai ar jb props aa gya toh nhi rokta hai .
const MemoChild = (props) => {
  console.log("I am Memo Child");
  
  

  return (
    <div>
        <hr />
      <h1 className="text-center">Memo Child</h1>
    </div>
  );
};

export default memo(MemoChild);
// ! OR
//export default React.memo(MemoChild)
