import React, { useReducer } from 'react'



function reducers(state,action){
  switch (action.type){
    case 'inc':
      return {count:state.count+1}
    case 'dic':
      return {count:state.count-1}
    default:
      return console.log("This is End")
  }
}



function Reducer() {

  const [state,dispatch] = useReducer(reducers,{count:1})

  return (
    <div>
      <button onClick={()=>dispatch({type:'inc'})}>+</button>
      <button onClick={()=>dispatch({type:'dic'})}>-</button>
   <h1>{state.count}</h1>
    </div>
  )
}

export default Reducer
