import React from 'react'
import Conditional from './conditional';
import { useState } from 'react';

function Appp() {

    const istrue = false ;

    const [iscorr , setiscorr] = useState(false)


  return (
    <div>
      <h1>Sharik</h1>
      <Conditional istrue = {istrue} />


    <button onClick={()=>setiscorr(!iscorr)}>Toggle</button>
    {iscorr?<p>This is True</p> : <p> This is False</p>}

    </div>
)
}

export default Appp
