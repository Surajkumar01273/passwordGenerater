// import { useCallback, useState, useRef, useEffect} from 'react'
// import './App.css'

// function App(){
//     const [length, setLength] = useState(8)
//     const [numberAlloud, SetNumberAlloud] = useState(false)
//     const [CharaterAlloud, setCharaterAlloud] = useState(false)
//     const [password, setPassword] = useState("")

//     const passwordGenerater = useCallback( () =>{
//         let pass = ""
//         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//         if(numberAlloud) str += "1234567890";
//         if(CharaterAlloud) str += "!~@#$%^&*()[]{}?.";

//         for (let i = 1; i <=length; i++) {
//             let char = Math.floor(Math.random() * str.length + 1);
//             pass += str.charAt(char);
            
//         }
//         setPassword(pass)

//     },[length, numberAlloud, CharaterAlloud, setPassword]);

//     useEffect( () =>{
//         passwordGenerater()
//     },
//         [length, numberAlloud, CharaterAlloud, passwordGenerater]

//     )


//     return(
//         <>
//         <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8 text-orange-500 bg-gray-800'>
//             <h1 className=' text-center my-3 text-white'>Password Generater</h1>
//             <div className='flex shadow roubded-lg overflow-hidden mb-4'>
//                 <input
//                 className='outline-none w-full py-1 px-3 rounded-lg'
//                 type='text'
//                 value={password}
//                 placeholder='Password'
//                 readOnly
//                 />
//                 <button className='outline-none bg-blue-700 tex-white px-3 py-0.5 ml-0.5 shrink-0 rounded-lg'>Copy</button>
//             </div>
//             <div className='flex text-sm gap-x-2'>
//                <div className='flex items-center gap-x-1'>
//                   <input
//                     type='range'
//                     min={4}
//                     max={100}
//                     value={length}
//                     className='cirsor-pointer'
//                     onChange={(e) => setLength(e.target.value)}
//                />
//                <label>Length: {length}</label>
//                </div>
//                <div className='flex item-center gap-x-1'>
//                 <input type="checkbox"
//                 defaultChecked = {numberAlloud}
//                 id='numberinput'
//                 onChange={() => {
//                     SetNumberAlloud( (prev)=> !prev)
//                 }}
//                  />
//                  <label htmlFor="numberinput">Number:</label>
//                </div>
//                <div className='flex item- center gap-x-1'>
//                 <input
//                 type='checkbox'
//                 defaultChecked={CharaterAlloud}
//                 id='inputcharater'
//                 onChange={() => {
//                     setCharaterAlloud( (prev) => !prev)
//                 }}
//                 />
//                 <label htmlFor='inputcharater'>Charater:</label>
//                </div>

//             </div>
//         </div>
//         </>
//     )
// }
// export default App

// function App(){

//     return(

//         <>
//         <div id='main'></div>
//         </>
//     )
// }

