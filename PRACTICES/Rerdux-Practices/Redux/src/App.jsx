import React ,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { setUser } from './Slices/UserSlice'
import ApiCalling from './comp/ApiCalling'

function App() {
  const user = useSelector(state => state.userInfo)
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  

  const addUser = () => {
    dispatch(setUser(value))
    setValue('')
  }
  return (
    <div>
      <h1>Hello i'm sharik</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addUser}>Add user</button>

      {user ? (
        user.users.map((val, index) => {
          return <li key={index}>{val}</li>;
        })
      ) : (
        <h2>Nothing User</h2>
      )}

      <br />
      <h1>
        -----------------------------------------------&&----------------------------------
      </h1>
      <ApiCalling />
    </div>
  );
}

export default App
