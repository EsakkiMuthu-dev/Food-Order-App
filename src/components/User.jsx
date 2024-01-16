import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
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
};

export default User;
