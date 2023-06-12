import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => (
<h1 className="head" tabIndex="5">
    Namaste React Using JSX
</h1>
);

const HeadingComponent = () => (
    <React.Fragment>
        <>
        <div id="container">
            <Title />
            <h1 className="heading">Namaste React Functional Component</h1>
        </div> 
        <div id="container2"></div> 
        </>
    </React.Fragment> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);