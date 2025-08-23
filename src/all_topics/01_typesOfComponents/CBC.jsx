// Yeh yahan pr component ka use kra gya hai jo ki use kr rha hai CBC taaki woh component ki properties ko inherit kr ske aur component node modules mein pehle se hi tha ar yeh structure hi follow krna hai jb CBC bnayenge toh .
import { Component } from "react";
class CBC extends Component {
  render() {
    return (
      <div>
        <h1>I am Class Based Component</h1>
      </div>
    );
  }
}
export default CBC;

