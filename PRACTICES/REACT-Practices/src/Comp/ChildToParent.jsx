import React from 'react'



function ChildToParent(prop) {

    let handleFN = () => {
       prop.sendData("im Sharik")
    }
    
  return (
    <div>
          <h1>
              hello Click Me 
          </h1>
          <button onClick={handleFN}>Click Me</button>
    </div>
  )
}

export default ChildToParent
