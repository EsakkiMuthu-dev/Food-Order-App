import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called!");
  }

  componentDidMount() {
    console.log("Parent Mounted Successfully!!");
  }

  render() {
    console.log("parent rendering!!");
    return (
      <div>
        <h1>About Us</h1>
        <h2>I want to learn a lot !!</h2>
        <div className="userContainer">
          <User name="Esakki Muthu " location="Tirunelveli" />
          <hr />
          <UserClass name="Bharthi Ravi" pos="first" location="Nagore" />
          <UserClass name="Bharthiiiii" pos="second" location="Nagore" />
        </div>
      </div>
    );
  }
}

// const About = () => (
//   <div>
//     <h1>About Us</h1>
//     <h2>I want to learn a lot !!</h2>
//     <div className="userContainer">
//       <User name="Esakki Muthu " location="Tirunelveli" />
//       <hr />
//       <UserClass name="Bharthi Ravi" location="Nagore" />
//     </div>
//   </div>
// );

export default About;
