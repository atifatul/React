import { Component } from "react";

class StatesInCBC extends Component {
  state = { value: "Hello" }; // yeh state pehle se ek object ke andar class based mein rhta hai uska value change kr rhe hai.

  updateState = () => {
    this.setState({ value: "Bye" });
  };

  render() {
    console.log(this); // yeh console pr current class object ko show krega .

    return (
      <div>
        <h1>States In CBC :{this.state.value}</h1>
        <button onClick={this.updateState}>update</button>
      </div>
    );
  }
}
export default StatesInCBC;

// Yeh statefull hai toh iske pass hook use nhi  hota hai toh isme hm use krenge "this" keyword .
// "this " keyword ek current object ko point krta hai .
// {this.state.value} => yeh "this " object ko point kr rha hai jiske andar state hai and state ke andar value hai toh usse print kr rhe hai aise likh kr .
