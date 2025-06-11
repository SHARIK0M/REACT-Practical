import React from 'react'

function PassValue(prop) {

    const clicked = ()=>{
        prop.senddata("Hello passing data from sharik")
    }
   
  return (
    <div>
      <h1>This is Pass value parent</h1>
      <button onClick={clicked}>Pass</button>
    </div>
  )
}

export default PassValue
