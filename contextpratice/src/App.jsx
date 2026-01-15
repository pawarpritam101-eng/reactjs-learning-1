import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='py-4 px-6 bg-orange-700'>Hello React</h1>
   </>
  )
}

export default App
