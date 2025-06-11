import React, { useEffect, useRef, useState } from 'react'

function  Ref() {
    const [val , setVal] = useState('')

    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current = val
    },[val])


    const inputVal = useRef()
function checked (){
  inputVal.current.style.color='red'
  console.log(inputVal.current)
}
  return (
    <div>
      <input 
      ref={inputRef}
      type="text" 
      value ={val}
      onChange={(e)=>setVal(e.target.value)}
       />

      <h1>{val}</h1>

      <button onClick={()=>console.log(inputRef.current
      )}>show text </button>

      <h1>My name is {inputRef.current}</h1>

      <h1 ref={inputVal}>Ref color check</h1>
      <button onClick={checked}>check Ref</button>
    </div>
  )
}

export default Ref


