import React from 'react'

function Conditional(props) {
  return (
    <div>
      <h1>{props.istrue?"welcome back":'Need to Login'}</h1>
    </div>
    
  )
}

export default Conditional
