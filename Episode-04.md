# Inline Style inside React Component like below
 - const styleCard = {
      backgroundColor: "#f0f0f0"
    }  => Javascript Object

    const ResturantCard = () => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}} || style={styleCard}>
            <h3>Meghana Foods</h3>
        </div>
        );
    };
    
# {{}} => Fiste one tells u to merge the second one to the curly braces (Javascript Object) 

# How to Make  ResturantCard for dynamic in the component So We can introduce the Props(Properties)
# Props => is Passing Arguments to the function (at the end Props is a normal function to pass arguments)
 -  <div className="res-container">
        <!-- <ResturantCard  resName="Meghana Foods" cuisine="Biriyani,  Fast Food" />
        <ResturantCard  resName="KFC" cuisine="Burger, Fast Food"/> --> called Props (is an Object)
    </div>

# 

# Final Code 

<!--
 import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - ResturantContainer
 *  -ResturantCard
 *      - Img
 *      - Name of Res, Star rating, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="/>
            </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>   
        </div>
    );
};

const ResturantCard = ({resName, cuisine}) => {
//    console.log(props) // Object
//    const {resName, cuisine} = props
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi"/>
            <h3>{resName}</h3> || <h3>{props.resName}</h3>
            <h3>{cuisine}</h3> || <h3>{props.resName}</h3>
            <h3>4.4 Start</h3>
            <h3>36 Min</h3>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
            <ResturantCard  resName="Meghana Foods" cuisine="Biriyani, Fast Food" />
            <ResturantCard  resName="KFC" cuisine="Burger, Fast Food"/>
            </div>
        </div>
    );
};

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); 
-->