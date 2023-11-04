import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const giriHobby = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quas!';
  const iconicHobby = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, rerum sunt dicta rem omnis ipsum.';
  return (
    <>
       <h1 className="text-3xl font-bold underline mb-4 bg-red-600 rounded text-black">
      Hello world!
    </h1>
      
      <Card username='Giridhar' hobby={giriHobby}/>
      <Card username='Iconic' hobby={iconicHobby}/>

    </>
  )
}

export default App
