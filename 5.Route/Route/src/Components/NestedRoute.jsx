import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/Dashboad'>
          <Route path='Student' element={<Students/>} />
          <Route path='Teacher' element={<Teachers/>} />
         </Route>
      </Routes>
    </BrowserRouter>
  )
}




import React from 'react'

function Dashboard() {
  return (
    <div>
      <h1>HI im Dashboard</h1>
      <Link to='student'>Student</Link>
      <Link to='Teacher'>Teacher</Link>
      <Outlet/>
    </div>
  )
}

export default Dashboard



// 💡 Real-Life Example:
// Imagine Dashboard is a room in a house.

// You want to show Students or Teachers inside that room.
// But unless you leave a space in the room (like a TV screen) to show them, no one will appear!

// That space is <Outlet />.

