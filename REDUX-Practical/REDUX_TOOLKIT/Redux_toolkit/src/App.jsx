import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Comp/Home'
import User from './Comp/User'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/user' element={<User/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App