import React, { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child'

function Parent() {

 const [count, setCount] = useState(0)
 const [dark , setDark ] = useState(true)

 let Theme = {
  backgroundColor : dark ? "black" : 'white',
  color : dark ? 'white' : 'black'
 }


//  let Passfunction = ()=>{
//   return [count+1 ,count+2 , count+3]
//  }

let Passfunction = useCallback((val)=>{
  return [count+1+val ,count+2+val , count+3+val]
 },[count])

  return (
    <div>
      <input type="text" onChange={(e)=>setCount(parseInt(e.target.value)||0)} />
      <h1 style={Theme}>{count}</h1>
      <button onClick={()=>setDark(!dark)}>Toggle</button>

      <Child passValue = {Passfunction}/>
    </div>
  )
}

export default Parent
