import React, { createContext } from 'react'
import LastChild from './LastChild'

export const MyContext = createContext()

function Parent() {
  let user = 'Basha'
  return (
    <MyContext.Provider value={{user:user}}>
      <h1>Hello I'm use context replace by Prop driling .....</h1>

      <LastChild/>
    </MyContext.Provider>
  )
}

export default Parent
