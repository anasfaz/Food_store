import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems=useSelector((store)=>store.cart.items)
console.log(cartItems,'cart');
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
    <header>
      <div className="flex items-center justify-between h-20 shadow-sm">
        <div className="pl-10">
          <Link to="/">
            <img className="h-10" src={LOGO_URL} alt="logo" />
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-9 pr-10 items-center">
            <li>
              <div className="group flex items-center cursor-pointer h-20">
                <Link className="flex items-center">
                  <span className="pr-2">
                    <svg
                      className="h-[19px] w-[19px] fill-[#3d4152] group-hover:fill-orange-500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z" />
                    </svg>
                  </span>
                  <span className="text-lg font-medium text-[#3d4152] group-hover:text-orange-500">
                    Search
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="group flex items-center cursor-pointer h-20">
                <span className="text-lg font-medium text-[#3d4152]  group-hover:text-orange-500">
                  online Status:
                </span>
                <span>{onlineStatus ? "🟢" : "🔴"}</span>
              </div>
            </li>
            {/*<li>
              <div className="text-lg">
                <Link to="/">home</Link>
              </div>
            </li>*/}
            <li>
              <div className="group flex  cursor-pointer h-20">
                <Link to="/contact" className="flex items-center">
                  <span className="mr-2">
                    <svg
                      className="fill-[#3d4152] group-hover:fill-orange-500"
                      width="20"
                      height="20"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m759.936 805.248l-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896a448 448 0 0 1 0 896z" />
                    </svg>
                  </span>
                  <span className="text-lg font-medium text-[#3d4152]  group-hover:text-orange-500">
                    contact
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/about"
                className="group flex items-center cursor-pointer h-20"
              >
                <span className="text-base font-medium text-[#3d4152]  group-hover:text-orange-500">
                  About as
                </span>
              </Link>
            </li>
            <li>
              <div className="group flex items-center cursor-pointer h-20">
                <span className="pr-2">
                  <svg
                    className="w-5 h-5 fill-[#3d4152]  group-hover:fill-orange-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0ZM3 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H3v-3Zm5-3a3 3 0 0 0-3 3v1h14v-1a3 3 0 0 0-3-3H8Z" />
                  </svg>
                </span>

                <div>
                  <button
                    className="text-base font-medium text-[#3d4152]  group-hover:text-orange-500"
                    onClick={loginChange}
                  >
                    {btnName}
                  </button>
                </div>
              </div>
            </li>
            <li>
              <Link className="group flex items-center h-20">
                <span className="flex items-center">
                <svg className="w-5 h-5 fill-[#3d4152] group-hover:fill-orange-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path  d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"/>
            </svg>
                  
                </span>
                <span className="text-lg font-medium text-[#3d4152] group-hover:text-orange-500"> Cart-({cartItems.length} items)</span>
               
              </Link>
            </li>
          </ul>
        </div>
        {console.log("headers--------------")}
      </div>
    </header>
  );
};

export default Header;
