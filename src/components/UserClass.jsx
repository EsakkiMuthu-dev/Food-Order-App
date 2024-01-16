import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor Called!");
  }

  componentDidMount() {
    const { pos } = this.props;
    console.log(`${pos} - Mounted Successfully!!`);
  }

  render() {
    console.log("child Rendering...");
    const { name, location } = this.props;
    const { count } = this.state;
    const increase = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    return (
      <div className="userCard">
        <h1>Count : {count}</h1>
        <button type="button" onClick={increase}>
          Increase Count
        </button>
        <h3>Team Members: </h3>
        <p>Name - {name}</p>
        <p>Location - {location}</p>
        <p>Contact - esakkimuthu6842@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
