import {useState} from 'react'

const State = () => {

    const [count , setCount] = useState(1)
  return (
    <>

    <h1>{count}</h1>
    <button onClick={()=> setCount(c=>c+1) }>Click me</button>
      
    </>
  )
}

export default State
