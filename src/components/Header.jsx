import { useState } from "react";
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
          <li>Home</li>
          <li>Offers</li>
          <li>Help</li>
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
