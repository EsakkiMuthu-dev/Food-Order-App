import User from "./User";
import UserClass from "./UserClass";

const About = () => (
  <div>
    <h1>About Us</h1>
    <h2>I want to learn a lot !!</h2>
    <div className="userContainer">
      <User name="Esakki Muthu " location="Tirunelveli" />
      <hr />
      <UserClass name="Bharthi Ravi" location="Nagore" />
    </div>
  </div>
);

export default About;
