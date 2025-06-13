import React, { useEffect, useState } from 'react';

const Users = () => {
 
  const [loading,setLoading] = useState(true)

  const [data, setData] = useState()

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      setLoading(false)
    })
    .catch(err=>console.log("error",err))
  }, [])
  
  

  return (
    <div>
      {loading?
    <p>Loading ...</p> 
    :data.map(i=>(
      <li key={i.name}>{i.name}</li>
    )) 
    }
    </div>
  )
};

export default Users;
