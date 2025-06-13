import React from 'react'

function Protected({isAuth,children}) {
    if (isAuth) {
      return <Navigate to='/login'/>
    }
    return children
}

export default Protected
