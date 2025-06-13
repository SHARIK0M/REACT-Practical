import React, { useRef } from 'react'
import Child from './child'

function Parent() {
    const emailRef = useRef()

    const Foucs = () => {
        emailRef.current.focus()
    }

  return (
    <div>
      <h1>Im parent </h1>
          <Child ref={emailRef} />
          <button onClick={Foucs}>Foucs The Email</button>
    </div>
  )
}

export default Parent
