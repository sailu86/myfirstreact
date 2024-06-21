import React, { useState } from "react";
import "./App.css";

import Greeting from "./Greeting";
return(
  <div className="App">
    <button onClick={={increase}}></button>
  </div>
)
// const App = () => {
//   // const counter = () => {
//   const [counter, setCounter] = useState(0);
//   const incrementcounter = () => {
//     console.log("counter is ", counter);
//     setCounter(counter + 1);
//   };
//   const decrementcounter = () => {
//     console.log("decremented", counter);
//     setCounter(counter - 1);
//   };

//   return (
//     <>
//       <div style={{ backgroundColor: counter < 5 ? "green" : "blue" }}>
//         <Greeting vorname="Sailaja" city="Munich" />
//         <Greeting vorname="Muzghan" city="london" />
//         <Greeting vorname="peter" city="paris" />
//         <button onClick={incrementcounter}>Increment</button>

//         <button onClick={decrementcounter}>Decrement </button>
//         <p>counter{counter}</p>
        
//       </div>
//     </>
//   );
// };
export default App;
