import { useState,useCallback, useEffect,useRef } from "react"

function App() {
  
  const [password,setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [specialCharatesAllowed, setSpecialCharatesAllowed] = useState(false);

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

    if(allowNumbers){
      string += '0123456789';
    }
    if(specialCharatesAllowed){
      string += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*string.length+1);
      pass += string.charAt(char); 
    }
    setPassword(pass);
  },[length,allowNumbers,specialCharatesAllowed]);

  useEffect(() =>{
    passwordGenrator();
  },[allowNumbers,specialCharatesAllowed,setPassword,passwordGenrator]);

  const passowrdRef = useRef(null)

  const copyToClipBoard = useCallback(()=>{
    passowrdRef.current?.select()
    passowrdRef.current?.setSelectionRange(0,25);
    window.navigator.clipboard.writeText(password);
  })

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passowrdRef}
           />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyToClipBoard}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={8}
        max={30}
        value={length}
        className="cursor-pointer" 
        onChange={(e) => {
          setLength(e.target.value)
        }}
        id="range"
        />
        <label htmlFor="range">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        className="" 
        id="numberAllowed"
        defaultChecked={allowNumbers}
        onClick={()=>{setAllowNumbers((prev)=> !prev)}}
        />
        <label htmlFor="numberAllowed">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={specialCharatesAllowed}
        className="" 
        id="characters"
        onClick={()=>{
          setSpecialCharatesAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="characters">Characters</label>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
