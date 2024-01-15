import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [status, setStatus] = useState("Login");

  const updateStatus = () => {
    setStatus(status === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header">
      <div className="logo">
        <img alt="Foody Logo " src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <li>
            <button type="button" className="login" onClick={updateStatus}>
              {status}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
