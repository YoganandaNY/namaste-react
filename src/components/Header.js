import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
    //let btnName = "Login";
    const[btnReactName, setBtnReactName] = useState("Login");

    console.log("Header Rendered");

    // If no dependency array => useEffect is called on every render
    // If dependency arryy is empty = [] => useEffect is called only on initial render(just once)
    // If depenedcy array is [btnReactName] => useEffect is called everytime btnReactName is updated

    useEffect(() => {
        console.log("useEffect Called");
    }, [btnReactName]);

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= { CDN_URL }/>
            </div> 
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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