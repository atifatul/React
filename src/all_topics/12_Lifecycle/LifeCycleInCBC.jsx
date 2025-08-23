import React, { Component } from "react";

export default class LifeCycleInCBC extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("Component Mounted");

    // yeh ek class ke current object mein intervalId key bna rha hai jisse isse hm bahar kahin use kr skte hai 
   this.intervalID= setInterval(() => {
      console.log("API Call");
    }, 2000);
  } //Yeh

  componentDidUpdate() {
    console.log("Component Updated");
  } //jyeh component mein hai wahi se use kr rhe hai .

  componentWillUnmount() {
    console.log("Component Unmounted");
    clearInterval(this.intervalID); // yeh interval wale yahan use hua hai .
  } // yeh

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <h1>LifeCycleInCBC</h1>
        <h2>Count={this.state.count}</h2>
        <button onClick={this.increment}>Update</button>
      </div>
    );
  }
}

// state -> CBC ,{ set interval , set timeout , promises }-> yeh javascript ka revise krna hai

//  componentDidMount() ,componentDidUpdate()-> yeh ui pr show hone ke baad chlta hai
//  componentWillUnmount()-> yeh ui se hatne ke pehle chlega .
