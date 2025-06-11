// import {useMemo, useState} from 'react'

// function Memo() {

//   const [count , setCount] = useState(1)

//   const [toggle, setToggle] = useState(true)

//   const slow = (num)=>{
//     console.log('Hello im there ');
    
//     for(let i=0 ; i<1e9 ; i++){}
//     return num*2
//   } 
 

//   let res = useMemo(()=>{
//    return slow(count)
//   },[count])


//   let themeStyle = {
//     backgroundColor : toggle ? "black" : "white",
//     color : toggle ? "white" : 'black' 
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>COUNT</button>
//       <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//       <h2 style={themeStyle}>{res}</h2>
//     </div>
//   )
// }

// export default Memo



// / REACT MEMO 

import React, { useState, memo } from 'react';

const Child = React.memo(function Child({ name }) {
  console.log("✅ Child component rendered");
  return <h2>Hello, {name}</h2>;
});



const Childd = ({ name }) => {
  console.log("✅ Child component rendered");
  return <h2>Hello, {name}</h2>;
};
// export  React.memo(Childd);



function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <Child name="Sharik" />
    </>
  );
}

export default Parent;
