import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")
  const[text,setText]=useState("Hello World")

  return (
    <>
    <div className="bgall" style={{backgroundColor:color}}>
       <h1 className="h1text">{text}</h1>
       <div className="allbg" >
        <div className="bg1">
         <button onClick={()=>{setColor("bisque");setText("Try to Learn");}} className="buttonclick" style={{backgroundColor:"bisque"}} >bisque</button>
         <button className="buttonclick" onClick={()=>{setColor("green");setText("Try to learn changes")}} style={{backgroundColor:"green"}}>Green</button>
         <button className="buttonclick" onClick={()=>{setColor("HoneyDrew");setText("A Beautiful One")}} style={{backgroundColor:"HoneyDrew"}}>HoneyDrew</button>
       </div>  {/* bg1*/}
      
        </div>{/* allbg*/}

       </div>{/* bgall*/}
    </>


  )
}

export default App
