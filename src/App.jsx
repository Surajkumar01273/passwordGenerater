import { useCallback, useState, useRef, useEffect} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [nuumberAlloud, setnumberAlloud] = useState(false)
  const [chracterAlloud, setChracterAlloud] = useState(false)
  const [password, setPassword] = useState("")
  // useRef hook
  const passwordref = useRef(null)

  const passwordGenerater = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(nuumberAlloud) str += "0 1 2 3 4 5 6 7 8 9"
    if(chracterAlloud) str += "!@#$%^&*()[]~"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }  
    setPassword(pass)

  }, [length, nuumberAlloud, chracterAlloud, setPassword])

  const copypasswordTocllipbord = useCallback(()=>{
    navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {
    passwordGenerater()
  },[length, nuumberAlloud, chracterAlloud, passwordGenerater])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generater</h1>
      <div className="flex shadow roubded-lg overflow-hidden mb-4">
        <input
        ref={passwordref} 
        type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly/>
        <button
        onClick={copypasswordTocllipbord}
         className='outline-none bg-blue-700 tex-white px-3 py-0.5 ml-0.5 shrink-0 rounded-lg'>copy
         </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={100} value={length} className='cirsor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={nuumberAlloud}
          id='numberInput'
          onChange={() => {
            setnumberAlloud((prev) => !prev);
          }}
          />
          <level htmlFor="numberInput">Number:</level>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {chracterAlloud}
          id='charInput'
          onChange={() => {
            setChracterAlloud((prev) => !prev);
          }} 
          />
          <level htmlFor="charInput">Charaters:</level>
        </div>
      </div>
    </div> 
    </>
  )
}

export default App
