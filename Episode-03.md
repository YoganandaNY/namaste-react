import React from "react";
import ReactDOM  from "react-dom/client";

# React.createElement => ReactElement- JS Object => HTMLElement(render)

- const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React"
  );

  console.log(heading);

# JSX - HTML-like or XML-like Syntax

# JSX (Transfiled before it reaches the JS) - PARCEL - Babel(Super Hero => Javascript Compiler)

# JSX ==> Babel tranfiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

-   const jsxheading = (
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX
    </h1>
    );

-   console.log(jsxheading);

-   const root = ReactDOM.createRoot(document.getElementById("root"));

-   root.render(jsxheading);

-   const parent = React.createElement("div", {id:"parent"},
      [
         React.createElement("div", {id:"child"},[
         React.createElement("h1", {}, "This is Namaste React Web Series"),
         React.createElement( "h2", {}, "By Yogananda")
       ]),
         React.createElement("div", {id:"child2"},[
         React.createElement("h1", {}, "I am h1 Tag"),
         React.createElement( "h2", {}, "I am h2 Tag")])
      ]);

-   console.log(parent)  //object

-   const root = ReactDOM.createRoot(document.getElementById("root"));

 -  root.render(parent);

#  React Component (Two Ways)
#  ** Class Based Components - OLD
#  ** Functional Component - NEW

#  React Component name always start with capital letter. ex: HeadComponent

-   const HeadComponent = () => {
        return <h1>Namaste React Functional Component</h1>
    }

-   const HeadComponent2 = () => (<h1>Namaste React Functional Component</h1>);

#    HeadComponent is same as HeadComponent2(Shortform)

#   React Functional Component ==> is a normal JS function with return code in jsx

#   put component in a component is called component composition

<!-- const HeadingComponent = () => (
    <div id="container">
        <h2>{number}</h2><span>{100  * 200}</span>
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
); -->
# We Can use {} inside JSX for anything like {console.log("React)} || {100 * 200} || <h2>{num}</h2>

# How to include React Element inside the React Component it's like below {}
<!-- React Element
const title = (
    <h2 className="head">Namaste React Using JSX Syntax</h2>
);
    /* React Functional Component */
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
); -->

# How to include React Element inside React Element it's like {elem}
<!-- const element = <span> From React Document</span>
    /* React Element */
const title = (
    <h2 className="head">
        Namaste React Using JSX Syntax
        {element}
    </h2>
); -->

# How to include React component inside React Element it's like <componentName />
<!-- const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const title = (
    <h2 className="head">
        Namaste React Using JSX Syntax
        <HeadingComponent />
    </h2>
); -->

# How to include React Component inside the React Component it's like below <componentName /> Also Called Component Composition
<!-- 
** React Functional Component **
const Title = () => (
<h1 className="head" tabIndex="5">
    Namaste React Using JSX
</h1>
);
 ** React Functional Component **
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title><Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>   
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); -->

# JSX  have only one Parent Element in React Component.
# We Cann't add another element inside the component (It will give error if added)
<!-- const HeadingComponent = () => (
    <div id="container">  // It's the Parent
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>   
); -->

# So We have to solve the Parent element issue in react component using the <React Fragment>
 <!-- 
 ** React Fragment => behaves like an empty tag **
const HeadingComponent = () => (
    <> || <React.Fragment> || <div> 
        <div id="container">
            <h1 className="heading">Namaste React Functional Component</h1>
        </div> 
        <div id="container2"></div> 
    < /> || </React.Fragment> || </div>
); -->

# React Component is the noraml javascript function so we can use in component like { Title ()} || <Title /> || <Title></Title >
# Beacause Title is the javascript variable. So use Title multiple times in React Component
# <></> => Is the shortCut/short form for <Ract.Fragment></Ract.Fragment>
# We can use multiple React Fragments in Component is working fine
# Also Use Multiple Root and Render function in React it's working fine

<!-- 
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
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(<HeadingComponent />);
root1.render(<Title />);
root1.render(<HeadingComponent />); -->

#  Final Code Episode - 03

<!-- 
import React from "react";
import ReactDOM  from "react-dom/client";

** React Element **
const element = <span> From React Document</span>

** React Element **
const title = (
    <h2 className="header">
        Namaste React Using JSX Syntax
        {element}
    </h2> 
);

** React Functional Component **
const Title = () => (
<h1 className="head" tabIndex="5">
    Namaste React Using JSX
</h1>
);

 ** React Functional Component **
 **  React Fragment => behaves like an empty tag **
const HeadingComponent = () => (
    <React.Fragment>
        <div id="container">
            <Title />
            {title}
            <Title></Title>
            {Title()}
            <h1 className="heading">Namaste React Functional Component</h1>
        </div> 
        <div id="container2"></div> 
    </React.Fragment> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); 
-->