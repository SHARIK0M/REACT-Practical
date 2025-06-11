import React, { useContext } from 'react'
import { Mycontex } from '../App'

function Prac() {
  let val = useContext(Mycontex)
  return (
    <div>
      <h2>Hi coming from Child {val.name}</h2>
    </div>
  )
}

export default Prac
