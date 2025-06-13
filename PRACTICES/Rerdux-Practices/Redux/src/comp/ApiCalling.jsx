import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crateApi } from "../Slices/ApiCall";

function ApiCalling() {
    const {data , error , loading} = useSelector((state) => state.ApiCall);
    const dispatch = useDispatch()

    const fetching = () => {
        dispatch(crateApi());
    }

  return (
      <div>
          <button onClick={fetching}>Fetch the data</button>
          {loading ? data.map((val, index) => {
              return <li key={index}>{ val.name}</li>
      }): <h2>Data will fetching ....</h2> }
    </div>
  )
}

export default ApiCalling
