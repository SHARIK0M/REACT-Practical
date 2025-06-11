import React from 'react'
import Normal from './PROPS/Normal'
import Spred from './PROPS/Spred'
import Map from './PROPS/Map'
import ChildProp from './PROPS/ChildProp'
import { useState } from 'react'
import Dynamic from './PROPS/Dynamic'
import PassValue from './PassValue'

function App() {

  const data = {name:'sharik',age:18}
  const fechData = [{name:'sharik',age:18},{name:'basha',age:21}]

  const [name,setName] = useState('sharik')

  function passVlau(val){
    alert('HI '+val)
  }

  return (
   <>
   <Normal name = {data.name} age = {data.age}/>

   <Spred {...data}/>

   <Map data={fechData}/>
   
   <ChildProp >
    <p>Hello sharik im call from perent</p>
   </ChildProp>
   

   <input type="text" onChange={(e)=>setName(e.target.value)} />
   <Dynamic name = {name}/>
  
   <PassValue senddata={passVlau} />

   </>
  )
}

export default App
