import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component Did Mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>this is Namaste React Web series</h2>
        <UserClass name={"First"} location={"kerala-class"} />
      </div>
    );
  }
}

export default About;
