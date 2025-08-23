import React, { useState } from "react";

const ControlledForms2 = () => {
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupUser);
  };
  return (
    <div>
      <h1>Controlled Forms 2</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={signupUser.username}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={signupUser.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          value={signupUser.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;

// state ke andar jo key hai and jo input ke andar name hai dono ka chiz same hona chahiye nhi toh extra key ban jayega 