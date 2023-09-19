import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            className="logo-img"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>home</li>
            <li>contact</li>
            <li>About as</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
};
  
export default Header;
