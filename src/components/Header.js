import { useState, useEffect, useContext } from "react";
import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //let btnName = "Login";
  const [btnReactName, setBtnReactName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  //console.log("Header Rendered");

  // If no dependency array => useEffect is called on every render
  // If dependency arryy is empty = [] => useEffect is called only on initial render(just once)
  // If depenedcy array is [btnReactName] => useEffect is called everytime btnReactName is updated

  useEffect(() => {
    //console.log("useEffect Called");
  }, [btnReactName]);

  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center bg-neutral-300">
      <div className="logo-container">
        <img className="logo w-40" src={CDN_URL} />
      </div>
      <div className="flex m-4 p-4 items-center">
        <ul className="flex">
          <li className="px-2 m-3">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 m-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 m-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 m-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 m-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 m-3 font-bold">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <button
            className="login px-2 m-3"
            onClick={() => {
              btnReactName === "Login"
                ? setBtnReactName("Logout")
                : setBtnReactName("Login");
            }}
          >
            {btnReactName}
          </button>
          <li className="px-2 m-3 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
