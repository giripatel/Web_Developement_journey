import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // const [count,setCount] = 0;

  const increaseCount = ()=>{
    if(count < 20){
    setCount(count+1);

    //Writing like this won't update the value to +4 because of useState() we incrementing the same value of useState()
    /*setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);*/

    //If the requirement is like above this approch does the job
    /*prevCounter returns a call back */
    setCount((prevCounter) => prevCounter+1);
    setCount((prevCounter) => prevCounter+1);
    setCount((prevCounter) => prevCounter+1);
    setCount(prevCounter => prevCounter+1);
    }
  }
  const decreaseCount = () => {
    if(count > 0){
      setCount(count-1);
      }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={increaseCount}> Increase 
        </button>
        <h1>count is {count}</h1>
        <button onClick={decreaseCount}>
          Decrease
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h3>{count}</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
