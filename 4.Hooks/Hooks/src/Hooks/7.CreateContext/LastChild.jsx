import React, { useContext } from 'react'
import { MyContext } from './Parent1'

function LastChild() {
 let contextVal = useContext(MyContext)

 console.log(contextVal)
  return (
     <div>
      <h1>{contextVal.user}</h1>
    </div>
  )
}

export default LastChild
