import React from 'react'

function Normal(props) {
  return (
   <>
   
   <h1>{props.name}</h1>
   <h2>{props.age}</h2>
   
   </>
  )
}




// ALSO <DESTRUCTURE>  Normal({name,age})  </DESTRUCTURE>

export default Normal
