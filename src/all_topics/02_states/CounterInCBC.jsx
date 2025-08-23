// import { Component } from "react";

import { Component } from "react";

class CounterInCBC extends Component {
  state = { count: 0 }; // yeh state ke andar maine count properties bnaya hai jiska value ko 0 rkha hai
  incre = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decre = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };

  render() {
    return (
      <div>
        <h1>Counter In CBC :{this.state.count}</h1>
        <button onClick={this.incre}>Increment</button>
        <button onClick={this.decre}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default CounterInCBC;
