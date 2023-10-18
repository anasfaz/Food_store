import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("called after ui rendering");
  }, [btnName]);
  const loginChange = () => {
    if (btnName == "Login") {
      setBtnName("Logout");
    } else if (btnName == "Logout") {
      setBtnName("Login");
    }
    console.log(btnName, "log");
  };
  return (
    <div className="header">
      <div>
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">home</Link> 
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            
            <Link to="/about">About as </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={loginChange}>
            {btnName}
          </button>
        </ul>
      </div>
      {console.log("headers--------------")}
    </div>
  );
};

export default Header;
