import React, { forwardRef } from 'react'

const Child = forwardRef((props,ref) => {

return (
    <div>
      <label htmlFor="">Email</label>
      <input type="text" ref={ref} placeholder='Enter your Email' />
    </div>
  )
})

export default Child
