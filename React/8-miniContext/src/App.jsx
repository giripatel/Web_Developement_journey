import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './componets/Profile'
import Login from './componets/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Let's play</h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
