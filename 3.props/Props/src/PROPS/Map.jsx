import React from 'react'

function Map({data}) {
  return (
    <div>
      {data.map(i=>{
        return <h4 key={i.name}>{i.name} = {i.age}</h4>
      })}
    </div>
  )
}

export default Map
