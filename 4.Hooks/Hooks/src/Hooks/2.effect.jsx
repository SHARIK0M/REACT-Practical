// import React, { useEffect, useState } from 'react'

// function Effect() {

//     const [num,setNum] = useState(100)

//     useEffect(()=>{

//         setNum(200)

//         return ()=>{
//             setNum(null)
//             console.log('clean up ')
//         }

//     },[])
    
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>setNum(c=>c+1)}>click me</button>
//     </div>
//   )
// }

// export default Effect


// // -----------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react'

function Effecct() {
  const [timmer,setTimmer] = useState(1)
  const [istrue,setIstrue] = useState(false)


  useEffect(()=>{
    let timme
    if(istrue){
     timme = setInterval(()=>{
        setTimmer((timmer)=>timmer+1)
      },1000)
    }


    return ()=>{
      clearInterval(timme)
    }
  },[istrue])

  return (
    <div>
      <h1>Timemer ....</h1>

      <button onClick={()=>setIstrue(true)}>Start</button>
      <h1>{timmer}</h1>
      <button onClick={()=>setIstrue(false)}>Stop</button>

    <button onClick={()=>setTimmer(1)}>Reset</button>
    </div>
  )
}

// export default Effect
