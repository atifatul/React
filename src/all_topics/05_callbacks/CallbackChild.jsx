// Yeh callback ke help

const CallbackChild = (props) => {
  console.log(props); //  {getData: ƒ}

  const handlebtn = () => {
    props.getData("Hii from Child");
  };
  return (
    <div>
      <h1> Callback Child </h1>
      <button onClick={handlebtn}> Send data </button>
      {/* <button onClick={() => props.getData("Javascript")}>Click</button> */}
    </div>
  );
};

export default CallbackChild;

// <button onClick={() => props.getData("Javascript")}>Click</button>
// Or
//  const handlebtn = () => {
// props.getData("Hii from Child");
//   };
// Yeh uppar dono same hi work kr rha hai bss button ke andar callback function isliye use kra hai ki woh automatically page load hone mein kaaam na kre tbhi kre jb click kre us button pr tb .
