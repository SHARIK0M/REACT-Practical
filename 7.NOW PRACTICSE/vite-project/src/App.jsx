// import React, { createContext } from 'react'
// import Prac from './components/Prac'
//  export const Mycontex = createContext()

// function App() {
//     let val = {name:'sharik'}
//   return (
//     <Mycontex.Provider value={val}>
//      <h1>Hello I'm Sharik</h1>

//     <Prac />
//     </Mycontex.Provider>
//   )
// }

// export default App

// --------------------------------------------------------------------------------------------------


// import { useState } from "react";

// const useInput = (initialValue = "") => {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const reset = () => setValue("");

//   return {
//     value,
//     onChange,
//     reset,
//   };
// };

// export default useInput;


// import useInput from "./useInput";

// const InputBox = () => {
//   const nameInput = useInput("");

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Enter Your Name:</h2>
//       <input type="text" {...nameInput} />
//       <br />
//       <p>Your input: {nameInput.value}</p>
//       <button onClick={nameInput.reset}>Reset</button>
//     </div>
//   );
// };

// export default InputBox;
