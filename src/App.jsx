import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Homepage/Home'
import ChatInterface from './Chatbot/ChatInterface'
import Signup from './Auth/Signup'
import Login from './Auth/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Signup/>
    
    </>
  )
}

export default App
