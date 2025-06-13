import React, { createContext, useState ,Suspense} from 'react'
import ChildToParent from './Comp/childToParent'
import ChildContext from './Comp/ChildContext'
import Reducer from './Comp/Reducer'

export const MyContext = createContext()



function App() {

  function passValue(val) {
    alert("Hello Im from child " + val)
    console.log(val)
  }

  const data = ['sharik', 'basha','arun']
  const [istrue, setIstrue] = useState(false)
  
const MyLazyComp = React.lazy(() => import("./Comp/ReactLazzy"));

  return (
    <MyContext.Provider value={{ data } }>
      <h1>Sharik ...</h1>
      {/* <ChildToParent sendData={passValue} /> */}

      {/* {data.map((val, index) => {
        return <li key={index}>{ val }</li>
      })} */}

      {/* conditional rendering */}
      {/* <button onClick={() => setIstrue(!istrue)}>{ istrue ? 'welcome' : 'Closing'}</button> */}

      
      {/* <ChildContext/> */}


      {/* <Reducer/> */}

      
      {/* React <Lazy></Lazy> */}
      {/* <h1>Main app</h1>
      <button onClick={() => setIstrue(!istrue)}>Toggle</button>
      <Suspense fallback={<p>Loading...</p>}>
        {istrue && <MyLazyComp/>}
      </Suspense> */}


      
      
    </MyContext.Provider>
  )
}

export default App
