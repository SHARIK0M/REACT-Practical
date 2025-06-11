import React from 'react'

function ChildProp(props) {
  return (
    <div>
      <h1>this isbefore child</h1>
      {props.children}
    </div>
  )
}

export default ChildProp
