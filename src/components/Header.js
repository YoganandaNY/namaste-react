import { useState } from "react";
import { CDN_URL } from "../utils/constant";

const Header = () => {
    //let btnName = "Login";
    const[btnReactName, setBtnReactName] = useState("Login");

    console.log("Header Rendered");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= { CDN_URL }/>
            </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={
                        () => {
                            btnReactName === "Login" ? setBtnReactName("Logout") : setBtnReactName("Login");
                         }}> {btnReactName} </button>
                </ul>
            </div>   
        </div>
    );
};

export default Header;