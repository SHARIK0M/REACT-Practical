import React, { useContext } from 'react'
import { MyContext } from "../App";

function ChildContext() {
    let {data} = useContext(MyContext);
    // console.log(data)
  return (
    <div>
          {data.map((val, index) => {
           return  <li key={index}>{ val}</li>
      })}
    </div>
  )
}

export default ChildContext
