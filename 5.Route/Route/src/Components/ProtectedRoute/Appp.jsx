import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './Protected';
import DashBoard from './DashBoard';


function Appp() {
    let isAuth = false
  return (
    <BrowserRouter>
    <Routes>
              <Route path='/login' element={<Protected isAuth={isAuth} > <DashBoard/> </Protected> } />
    </Routes>
    </BrowserRouter>
  )
}

export default Appp
