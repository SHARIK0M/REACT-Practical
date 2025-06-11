import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import Dynamic from './Components/Dynamic'

function App() {
  return (

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:id' element={<Dynamic/>} />
      <Route path='*' element={<Error/>} />
     </Routes>
     </BrowserRouter>
  )
}

export default App
