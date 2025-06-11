import React, { useRef } from 'react'
// import { Navigate } from 'react-router-dom'
import Nav from './Navigate'
import { Link } from 'react-router-dom'

const Home = () => {

  let inputref = useRef()

  function handle(e){
    e.preventDefault()
    alert('Form  submited '+inputref.current)
  }
  return (
    <div>
      <h1>Home</h1>
     <Link to='/about'>Go to About</Link>
      <Nav/>


      <form onSubmit={handle}>
        <h1>Hello</h1>
        <input type="text" ref={inputref} onChange={(e)=>inputref.current = e.target.value} />
        <button type='submit'>sumit</button>
      </form>
    </div>
  )
}

export default Home
