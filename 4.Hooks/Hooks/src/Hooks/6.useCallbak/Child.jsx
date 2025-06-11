import React, { useEffect, useState } from 'react'

function Child({passValue}) {

const [statee , setStatee] = useState([])


useEffect(()=>{
    console.log('im also calling')
  setStatee(passValue(10))
},[passValue])

  return (
    <div>
      <ul>
        {statee.map((Val,index)=>{
          return <li key={index}>{Val}</li>
        })}
      </ul>
    </div>
  )
}

export default Child
