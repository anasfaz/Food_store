import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [btnName,setBtnName]=useState('Login')
  const loginChange = () => {
    if (btnName == 'Login') {
      setBtnName('Logout')
    } else if (btnName == 'Logout') {
      setBtnName('Login')
    }
    console.log(btnName,'log');
  }
  return (
    <div className="header">
      <div>
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>contact</li>
          <li>About as</li>
          <li>Cart</li>
          <button className="login-btn" onClick={loginChange}>{btnName}</button>
        </ul>
      </div>
      {console.log("headers--------------")}
    </div>
  );
};

export default Header;
