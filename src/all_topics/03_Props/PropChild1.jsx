const PropChild1 = (x) => {
  console.log(x); //{prop1:"Hello", prop2:{},prop3:[10,20,30]}

  return (
    <div>
      <h1> I am Prop Child</h1>
      <h2> {x.prop1} </h2>
      <h2>{x.prop2.ename} </h2>
      <h2>{x.prop3[2]} </h2>
    </div>
  );
};
export default PropChild1;
