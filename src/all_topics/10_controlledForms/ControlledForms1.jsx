import React, { useState } from "react";

const ControlledForms1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    console.log(e);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    // yeh input email,password ke data toh as a object email and password mein daal dega .
    let userdata = { email, password };
    console.log(userdata);

    // Yeh jb submit krenge uske baad email and password ke field ko empty dikhane ke liye kra hai
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Learn Controlled Forms 1</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email :</label>
        <input type="text" value={email} onChange={handleEmail} />
        <br /> <br />
        <label htmlFor="">Password :</label>
        <input type="text" value={password} onChange={handlePassword} />
        <br /> <br />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;

//* yeh email aur password mein value mein state ka email, password daal rhe hai jisme pehle woh empty rhega and onchange se state mein email,password ka value store bhi ho rha hai and ui pr show bhi ho rha hai .

// Controlled form -> mtlb data state mein store hoga .


