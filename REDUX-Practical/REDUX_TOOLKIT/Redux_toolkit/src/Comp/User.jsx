import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteUser} from '../slices/userSlice'
import './User.css';


function User() {

const users = useSelector(state => state.userInfo.users)
const dispatch = useDispatch()
 return (
  <div className="user-container">
    <h1>User</h1>

    {users.map((user, index) => (
      <div className="user-card" key={index}>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <h3>{user.email}</h3>
        <button onClick={() => dispatch(deleteUser(index))}>Delete</button>
      </div>
    ))}
  </div>
);

}

export default User