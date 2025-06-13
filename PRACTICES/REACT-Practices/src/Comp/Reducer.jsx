import React, { useReducer, useState } from 'react'



function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
  }
}


function Reducer() {
    let [count, dispatch] = useReducer(reducer,{count:0})
    
  return (
    <div>
          <h1>{count.count}</h1>
          <button onClick={()=>dispatch({type:'inc'})}>Count the value</button>
    </div>
  )
}

export default Reducer
