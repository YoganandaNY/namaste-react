import User from "./User";
import UseClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Contructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT EP-01");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Upadate");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User /> */}
        <UseClass name={"First"} location={"Ramanagar"} />
        {/* <UseClass name={"second"} />
                <UseClass name={"Third"}  />
                <UseClass name={"Fourth"} /> */}
      </div>
    );
  }
}

export default About;

/*
- Parent Contructor
- Parent Render
    
    - First Child Contructor
    - Fitst Child Render

    - Second Child Contructor
    - Second child Render

    - Third Child Contructor
    - Third child Render

    - Fourth Child Contructor
    - Fourth child Render

    - First Child Component Did Mount
    - Second Child Component Did Mount
    - Third Child Component Did Mount
    - Fourth Child Component Did Mount  
    
- Parent Child Component Did Mount    
*/

// import User from "../components/User";
// import UseClass from "./UserClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User name={"This is Yogananda (function)"}/>

//             {/* <UseClass name={"This is Yogananda (class)"} location = {"Ramanagar"}/> */}
//         </div>
//     )
// };

// export default About;
