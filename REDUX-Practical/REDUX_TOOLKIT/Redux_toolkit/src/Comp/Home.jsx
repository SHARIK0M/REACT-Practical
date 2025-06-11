import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {setUsers} from '../slices/userSlice'

import './Home.css';


function Home() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((curr) => ({ ...curr, [name]: value }))
  }

  const dispatch = useDispatch()

  const AddUser = (e) => {
    e.preventDefault()
    console.log('User Added:', user)
    dispatch(setUsers(user))
    // You can handle submit logic here (like sending to API)
  }

 return (
  <div className="container">
    <Link to={'/user'}>User Page</Link>
    <h2>Add User</h2>

    <form onSubmit={AddUser}>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Enter your Age"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter your Email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  </div>
);

}

export default Home
