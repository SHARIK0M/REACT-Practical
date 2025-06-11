import React from 'react'
import {useNavigate} from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()

    function clicked(){
        navigate('/user/sharik')
    }
  return (
    <div>
      <button onClick={clicked}>NAVIGATE</button>
    </div>
  )
}

export default Nav
