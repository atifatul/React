const PropChild2 = (x) => {
  console.log(x); //{propdata:{data:"Hello",obj:{},arr:[]}}
  // Now destructuring above store object
  let {
    data,
    obj: { id, ename },
    arr,
  } = x.propdata;
  return (
    <div>
      <h1>I am Prop Child 2</h1>
      <h2>
        {data} {ename} age is {arr[1]}
      </h2>
    </div>
  );
};
export default PropChild2;
