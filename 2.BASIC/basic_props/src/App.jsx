import User from "./props";
import Map from "./componets/renderDynamicList";


function App(){

const userData = {name:'sharik',age:19} 

  return (<>
  {/* type 1  */}

  {/* <User name = {userData.name} age={userData.age}/> */}

  {/* type 2 */}
{/* 
  <User {...userData} />09999999

  <h1>sharik</h1> */}
  
  <Map/>
  
  </>) 
}

export default App;
