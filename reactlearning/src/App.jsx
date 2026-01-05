import { useState } from 'react'

function App()
{ 
  const [counter,setcounter]=useState(0)

 //for increasing no
  const addvalue=()=>
  {
    if(counter<=19)
    {
       setcounter(counter+1)
     console.log("clicked",counter)
    }
    else{
      alert("no is will not be increased more than 20")
    }
     
  }
   //for decreasing no
  const decreasevalue=()=>
  {
    if(counter>=1)
    {
       setcounter(counter-1)
    }
    else
    {
       alert("-ve no is not allowed")
    }
  }
 
  return (
    <>
       <h1>Hello React</h1>
       <h2>Counter: {counter}</h2>
       <button onClick={addvalue} >Add Value {counter}</button><br />
       <button onClick={decreasevalue} >Decrease Value {counter}</button>
       
    </>   
     )
  }
   
export default App
