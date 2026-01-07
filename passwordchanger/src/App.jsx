import { useState,useCallback,useEffect} from 'react'
import './App.css'
import { useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const[chara,setCharacter]=useState(false)
  const[num,setnum]=useState(false)
  const[password,setpassword]=useState("")

  const passwordRef=useRef(null)

  //creating password function
  const passgen=useCallback(()=>
  {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="0123456789"
    if(chara) str+="!@#$%^&*()_+-=[]{}|;:,.<>?"

    for(let i=0;i<length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)  
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,chara,num])

  // const copyPasswordTobox=useCallback(()=>
  // {
  //    passwordRef:current?Select();
  //    p

  // },[setpassword])

useEffect(()=>
{
  passgen()
},[length,num,chara,passgen])

  return (
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-400 text-orange-500">
    <h1 className="text-white text-center">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
      {/*password-box*/}
      <input type="text" value={password} className="outline-none w-full py-1 px-3 text-white" placeholder="password" readOnly />
      {/*password-box*/}
      <button  className='outline-none bg-blue-700 text-white py-0.5 px-3'>copy</button>
    </div>

      {/*length-box*/}
    <div className='flex flex-sm gap-x-2'>
      <div className='flex items-center gap-x-1' >
        <input type="range" max={50} min={7} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
        <label>Length:{length}</label>
      </div>

      {/*number squarebox*/}
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={num} id="numberinput" onChange={()=>{setnum((prev)=>!prev)}}></input>
        <label>Number</label>
      </div>
     
      {/*character squarebox*/}
      <div className="flex item-center gap-x-1">
        <input type="checkbox" defaultChecked={chara} id="characterinput" onChange={()=>{setCharacter((prev)=>!prev)}}></input>
        <label>Character</label>
      </div>

    </div>

   </div>
  )
}

export default App
